import React from 'react';
import { FaCartPlus, FaStarOfLife } from 'react-icons/fa';
import './TopCourses.css';

const TopCourses = () => {
  return (
    <>
      <div className="w-full pt-20">
        <h2 className="text-7xl font-extrabold text-center text-shadow-xl">
          Top Online Courses
        </h2>

        <p className="text-center text-lg mt-5 text-gray-900">
          The world’s largest selection of courses choose from 130,000 online video <br /> courses with new additions published every month
        </p>

        <div className="w-full px-4 my-20 flex justify-start gap-5 overflow-x-auto custom-scrollbar">
          {/* course 1 */}
          <div className="w-[300px] flex flex-shrink-0 flex-col">
            <div className="w-full h-[200px] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1497015455546-1da71faf8d06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2dyYW1taW5nJTIwdmlkZW98ZW58MHx8MHx8fDA%3D"
                alt="course"
                className="w-full h-full object-cover scale-110 hover:scale-100 cursor-pointer transition-all duration-300"
              />
            </div>
            <div>
              <h3>Financial Management for Entrepreneurs</h3>
              <div className="flex items-center justify-start gap-5">
                <p className="flex items-center gap-2">
                  4.5/5 <FaStarOfLife className="text-yellow-500" />
                </p>
                <FaCartPlus className="text-red-600" />
              </div>
              <div className="flex items-center justify-between gap-5">
                <p className="bg-gray-100 px-2 py-1 rounded-md w-[50%]">Sarah Lee</p>
                <p className="bg-gray-100 px-2 py-1 rounded-md w-[50%]">15 Students</p>
              </div>
            </div>
          </div>

          {/* course 2 */}
          <div className="w-[300px] flex flex-shrink-0 flex-col">
            <div className="w-full h-[200px] overflow-hidden rounded-lg">
              <img
                src="https://images.pexels.com/photos/1181356/pexels-photo-1181356.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1"
                alt="course"
                className="w-full h-full object-cover scale-110 hover:scale-100 cursor-pointer transition-all duration-300"
              />
            </div>
            <div>
              <h3>Intro to Python Programming</h3>
              <div className="flex items-center justify-start gap-5">
                <p className="flex items-center gap-2">
                  4.8/5 <FaStarOfLife className="text-yellow-500" />
                </p>
                <FaCartPlus className="text-red-600" />
              </div>
              <div className="flex items-center justify-between gap-5">
                <p className="bg-gray-100 px-2 py-1 rounded-md w-[50%]">Mark Jones</p>
                <p className="bg-gray-100 px-2 py-1 rounded-md w-[50%]">25 Students</p>
              </div>
            </div>
          </div>

          {/* course 3 */}
          <div className="w-[300px] flex flex-shrink-0 flex-col">
            <div className="w-full h-[200px] overflow-hidden rounded-lg">
              <img
                src="https://images.pexels.com/photos/1181371/pexels-photo-1181371.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1"
                alt="course"
                className="w-full h-full object-cover scale-110 hover:scale-100 cursor-pointer transition-all duration-300"
              />
            </div>
            <div>
              <h3>Web Design Mastery: From Beginner to Pro</h3>
              <div className="flex items-center justify-start gap-5">
                <p className="flex items-center gap-2">
                  4.7/5 <FaStarOfLife className="text-yellow-500" />
                </p>
                <FaCartPlus className="text-red-600" />
              </div>
              <div className="flex items-center justify-between gap-5">
                <p className="bg-gray-100 px-2 py-1 rounded-md w-[50%]">Anna Smith</p>
                <p className="bg-gray-100 px-2 py-1 rounded-md w-[50%]">12 Students</p>
              </div>
            </div>
          </div>

          {/* course 4 */}
          <div className="w-[300px] flex flex-shrink-0 flex-col">
            <div className="w-full h-[200px] overflow-hidden rounded-lg">
              <img
                src="https://images.pexels.com/photos/1181350/pexels-photo-1181350.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1"
                alt="course"
                className="w-full h-full object-cover scale-110 hover:scale-100 cursor-pointer transition-all duration-300"
              />
            </div>
            <div>
              <h3>Digital Marketing Essentials</h3>
              <div className="flex items-center justify-start gap-5">
                <p className="flex items-center gap-2">
                  4.6/5 <FaStarOfLife className="text-yellow-500" />
                </p>
                <FaCartPlus className="text-red-600" />
              </div>
              <div className="flex items-center justify-between gap-5">
                <p className="bg-gray-100 px-2 py-1 rounded-md w-[50%]">John Smith</p>
                <p className="bg-gray-100 px-2 py-1 rounded-md w-[50%]">8 Students</p>
              </div>
            </div>
          </div>

          {/* course 5 */}
          <div className="w-[300px] flex flex-shrink-0 flex-col">
            <div className="w-full h-[200px] overflow-hidden rounded-lg">
              <img
                src="https://images.pexels.com/photos/1494859/pexels-photo-1494859.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1"
                alt="course"
                className="w-full h-full object-cover scale-110 hover:scale-100 cursor-pointer transition-all duration-300"
              />
            </div>
            <div>
              <h3>Data Science with R: A Comprehensive Guide</h3>
              <div className="flex items-center justify-start gap-5">
                <p className="flex items-center gap-2">
                  5/5 <FaStarOfLife className="text-yellow-500" />
                </p>
                <FaCartPlus className="text-red-600" />
              </div>
              <div className="flex items-center justify-between gap-5">
                <p className="bg-gray-100 px-2 py-1 rounded-md w-[50%]">Olivia Brown</p>
                <p className="bg-gray-100 px-2 py-1 rounded-md w-[50%]">20 Students</p>
              </div>
            </div>
          </div>

          {/* course 6 */}
          <div className="w-[300px] flex flex-shrink-0 flex-col">
            <div className="w-full h-[200px] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1528109966604-5a6a4a964e8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nJTIwdmlkZW98ZW58MHx8MHx8fDA%3D"
                alt="course"
                className="w-full h-full object-cover scale-110 hover:scale-100 cursor-pointer transition-all duration-300"
              />
            </div>
            <div>
              <h3>Introduction to UX/UI Design</h3>
              <div className="flex items-center justify-start gap-5">
                <p className="flex items-center gap-2">
                  4.9/5 <FaStarOfLife className="text-yellow-500" />
                </p>
                <FaCartPlus className="text-red-600" />
              </div>
              <div className="flex items-center justify-between gap-5">
                <p className="bg-gray-100 px-2 py-1 rounded-md w-[50%]">Emily White</p>
                <p className="bg-gray-100 px-2 py-1 rounded-md w-[50%]">30 Students</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center my-10">
          <button className="bg-red-600 text-white px-6 py-4 rounded-md hover:bg-transparent hover:text-red-600 hover:border-red-600 hover:border-2">
            View All Courses
          </button>
        </div>
      </div>

      <div className="mx-auto w-full h-[60vh] md:h-[80vh] mt-20 text-center flex flex-col items-center justify-center gap-5">
        <h3 className="text-4xl md:text-6xl text-gray-800 font-bold">Begin Your Learning Journey Today</h3>
        <p className="text-lg text-gray-600 max-w-[650px]">
          Join millions of learners from around the world, and start a course now that will help you achieve your career goals!
        </p>
        <button className="bg-red-600 text-white px-6 py-4 rounded-md hover:bg-transparent hover:text-red-600 hover:border-red-600 hover:border-2">
          Get Started
        </button>
      </div>
    </>
  );
}

export default TopCourses;
