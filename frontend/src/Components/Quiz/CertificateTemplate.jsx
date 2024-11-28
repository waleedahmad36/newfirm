import React from "react";
import "./CertificateTemplate.css"; // Custom CSS for extra styling

const CertificateTemplate = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      {/* Certificate Container */}
      <div className="relative bg-white w-[90%] max-w-4xl shadow-2xl overflow-hidden rounded-lg certificate-border">
        {/* Flyover Background */}
        <div className="absolute inset-0 opacity-10 z-0 flyover-bg">
          <h1 className="text-8xl font-bold text-gray-700 text-center pt-40 uppercase tracking-wide">
            Company Name
          </h1>
        </div>

        {/* Content Area */}
        <div className="relative z-10 p-10">
          {/* Logo and Title */}
          <div className="flex justify-center items-center mb-6">
            <img
              src="/logo.png" // Replace with your logo URL
              alt="Logo"
              className="h-20 w-20 rounded-full border-4 border-gray-300"
            />
          </div>

          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 uppercase mb-2">
              Certificate of Completion
            </h1>
            <p className="text-sm text-gray-500">This certifies that</p>
          </div>

          {/* Recipient Name */}
          <div className="text-center my-8">
            <h2 className="text-5xl font-extrabold text-gray-900">Mary Jane</h2>
          </div>

          {/* Certification Details */}
          <div className="text-center">
            <p className="text-lg text-gray-600">
              Has successfully completed the course on
            </p>
            <h3 className="text-2xl font-semibold text-gray-800">
              Canva Masterclass
            </h3>
          </div>

          {/* Footer Information */}
          <div className="flex justify-between items-center mt-12">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-500">Authorized By</p>
              <div className="mt-2 w-32 mx-auto border-t border-gray-400"></div>
              <p className="text-xs mt-1">Management</p>
            </div>

            <div className="text-center">
              <p className="text-sm font-medium text-gray-500">Issued By</p>
              <div className="mt-2 w-32 mx-auto border-t border-gray-400"></div>
              <p className="text-xs mt-1">Company Name</p>
            </div>
          </div>

          {/* Footer Text */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-400">www.companywebsite.com</p>
            <p className="text-xs text-gray-400 mt-1">
              "Empowering education for a brighter future"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateTemplate;
