import React from 'react';
import grp1 from '../assets/grp1.png';

const About = () => {
  return (
    <section className="bg-gray-100 p-10">
      {/* Section Container */}
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        
        {/* Heading and Paragraph */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold text-[#14211C] mb-4">About Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            At Hous, we are dedicated to delivering efficient and effective property management solutions.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="w-full flex flex-col md:flex-row justify-around gap-8">
          <div className="flex flex-col items-center text-center">
            <p className="text-3xl font-bold text-[#14211C]">30%</p>
            <p className="text-gray-500">Annually</p>
            <p className="text-gray-600">Increase rentals & renewal by</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <p className="text-3xl font-bold text-[#14211C]">35%</p>
            <p className="text-gray-500">Annually</p>
            <p className="text-gray-600">Grow your profits by</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <p className="text-3xl font-bold text-[#14211C]">20+</p>
            <p className="text-gray-500">Hours Monthly</p>
            <p className="text-gray-600">Save an average of</p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-8">
          <button className="bg-[#14211C] text-white px-6 py-3 rounded-full hover:bg-white hover:text-[#14211C] border-2 border-[#14211C] transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>

      {/* Onboarding Section */}
      <div className="flex flex-col items-center bg-[#14211C] p-6 text-white mt-10 rounded-xl">
        {/* Text Section */}
        <p className="text-2xl text-center mb-5">
          For Seamless Onboarding & Property Management Experience
        </p>
        
        {/* Buttons Section */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[
            { label: "Rentals", customClass: "bg-[#4DCFBB] text-[#14211C]" },
            { label: "Agreements" },
            { label: "Tasks" },
            { label: "People" },
            { label: "Transaction" },
            { label: "Communication" },
            { label: "Bookings" },
            { label: "Complaints" },
          ].map(({ label, customClass = "" }, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-full hover:bg-white hover:text-[#14211C] border-2 border-white transition-all duration-300 ${customClass}`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Image Section */}
        <img src={grp1} alt="Group" className="w-full max-w-4xl rounded-lg shadow-md" />
      </div>
    </section>
  );
};

export default About;
