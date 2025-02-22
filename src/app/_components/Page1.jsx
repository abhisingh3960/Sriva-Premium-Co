import React from "react";

const Page1 = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center text-center px-6 py-12 md:grid md:grid-cols-2 md:px-20 md:py-20 md:text-left md:items-center md:gap-16">
      
      {/* Left Section */}
      <div className="flex flex-col gap-6 items-center md:items-start">
        <h2 data-aos="fade-up" className="text-[21px] md:text-[21px] text-[#FCD1CD] font-semibold leading-relaxed max-w-md">
          "Company newsletters are essential in building relationships with
          your employees, customers, or even prospective clients."
        </h2>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <img 
            data-aos="fade-up" 
            src="image1.png" 
            alt="Image 1" 
            className="w-full max-w-[150px] md:max-w-[250px] h-auto object-cover rounded-lg" 
          />
          <img 
            data-aos="fade-up" 
            src="image2.png" 
            alt="Image 2" 
            className="w-full max-w-[150px] md:max-w-[250px] h-auto object-cover rounded-lg" 
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col gap-6 items-center md:items-start mt-8 md:mt-0">
        <img 
          data-aos="fade-up" 
          src="image3.png" 
          alt="Image 3" 
          className="w-full max-w-[250px] md:max-w-[400px] h-auto object-cover rounded-lg mb-6" 
        />
        <h3 
          data-aos="fade-up" 
          className="text-[16px] leading-relaxed max-w-md px-4"
        >
          Make your newsletter a beautiful representation of your company by
          inserting your logo, infusing it with your brand colors, and including
          official images from your files! Do you want to send out newsletters
          for Holi or Christmas? Or use your company newsletter to advertise 
          your new products or services? The options are endless!
        </h3>
      </div>
    </div>
  );
};

export default Page1;
