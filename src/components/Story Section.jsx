import React from "react";

function StorySection() {
  return (
    <div className="py-16 px-4 max-w-5xl mx-auto bg-blue-50 m-3.5 w-3xl">
      <div className="md:flex gap-12 items-center">
        <div className="md:w-1/2 mb-8">
          <img
            src="/service.jpeg"
            alt="Our team helping someone"
            className="rounded-lg shadow-xl"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">How It Started</h2>
          <p className="text-gray-600 mb-4">
            In 2023, our founder struggled to find free, patient help for a technical issue. 
            That frustration became this community-driven solution.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>100% volunteer-powered</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>No paywalls, ever</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Over 5,000 questions answered</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default StorySection;
