import React from "react";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  w-full bg-white mb-18 min-h-screen">
      {/* Left Section - Text */}
      <div className="bg-black text-white flex flex-col justify-center items-center text-center p-10 md:p-16 md:items-start md:text-left">
        
        {/* Logo */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold">
            Sriva <br />
            <span>Premium Co.</span>
          </h3>
        </div>

        <h1 className="text-[85px] md:text-[80px] font-bold leading-tight">
          THE <br />
          <span className="text-[#FCD1CD]">PREMIUM</span> <br />
          PULSE
        </h1>

        <h2 className="text-[16px] md:text-2xl font-medium mt-4 text-white">
          Issue 70 | Volume 3 <br />
          <span className="text-white">May 17, 2025</span>
        </h2>
      </div>

      {/* Right Section - Image */}
      <div className="flex justify-center items-center p-6 bg-[#FCD1CD]">
        <img
          src="heroimage.png"
          alt="Hero Image"
          className="w-3/4 md:w-[500px] h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;
