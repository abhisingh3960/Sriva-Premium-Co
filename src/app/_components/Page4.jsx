import React from "react";

const Page4 = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full bg-white min-h-screen">
      {/* Left Section - Text */}
      <div className="bg-black text-white flex flex-col justify-center items-center text-center px-10 py-20 md:px-16 md:items-start md:text-left gap-6">
        <h1 data-aos="fade-up" className="text-[56px] md:text-[80px] font-bold leading-snug tracking-tight whitespace-nowrap">
          MENTAL HEALTH<br/> MATTERS
        </h1>

        <h2 data-aos="fade-up" className="text-lg md:text-[21px] text-[21px]  text-[#FCD1CD] font-semibold">
          written by Aditi Rao
        </h2>
      </div>

      {/* Right Section - Image */}
      <div className="flex justify-center items-center p-10 bg-[#FCD1CD]">
        <img
          data-aos="fade-up"
          src="image6.png"
          alt="Image 6"
          className="w-[400px] md:w-[450px] lg:w-[500px] h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Page4;
