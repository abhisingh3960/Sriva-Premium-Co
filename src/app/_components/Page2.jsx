import React from "react";

const Page2 = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center text-center px-6 py-12 md:grid md:grid-cols-2 md:px-16 md:py-20 md:gap-12 md:text-left">
      {/* Left Section */}
      <div className="space-y-6 flex flex-col items-center md:items-start">
        <p data-aos="fade-up" className="text-[16px] md:text-[16px] leading-relaxed max-w-md">
          Company newsletters are essential in building relationships with your
          employees, customers, or even prospective clients. Engaging and
          professionally-made company newsletters have the power to inspire
          loyalty and repeat business. Get in touch with the people who matter
          to your business by making company newsletters one of your priorities.
        </p>
        <p data-aos="fade-up" className="text-[16px] md:text-[16px] leading-relaxed max-w-md">
          When sending out a company newsletter, keep in mind these three
          things. First, send out your newsletter regularly. Stick to your
          promise if it’s going to be weekly, monthly, or quarterly. The second
          is to have a proper layout. Make your newsletter interesting and easy
          to read. Lastly, ensure the quality of the content and images you will
          share.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex flex-col gap-8 items-center  mt-8 md:mt-0">
        <div className="grid grid-cols-2 gap-4">
          <img
            data-aos="fade-up"
            src="image4.png"
            alt="Image 4"
            className="w-full max-w-[150px] md:max-w-[250px] h-auto rounded-lg shadow-lg"
          />
          <img
            data-aos="fade-up"
            src="image5.png"
            alt="Image 5"
            className="w-full max-w-[150px] md:max-w-[250px] h-auto rounded-lg shadow-lg"
          />
        </div>

        <h3
          data-aos="fade-up"
          className="text-[21px] md:text-[21px] font-semibold text-pink-300 px-4 max-w-md"
        >
          "Engaging and professionally-made company newsletters have the power
          to inspire loyalty and repeat business."
        </h3>
      </div>
    </div>
  );
};

export default Page2;
