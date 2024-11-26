import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/db.js";
import cookieParser from "cookie-parser";
import userAuthRoutes from "./routes/userAuthRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import cors from "cors";
import path from "path";
dotenv.config();



const app = express();
const __dirname = path.resolve();

app.use(
  cors({
    origin: "http://localhost:5173",  // Frontend URL
    credentials: true,  // Allow credentials (cookies)
  })
);
app.use(express.json({limit:"50mb"}));   //will allow us to parse req.body
app.use(cookieParser());

app.use('/api/v1/auth',userAuthRoutes);
app.use('/api/v1/course',courseRoutes);
app.use('/api/v1/admin',adminRoutes);


if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	// react app
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
  connectDB();
});

