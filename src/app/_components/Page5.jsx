import React from "react";

const Page5 = () => {
  return (
    <div className="bg-black text-white px-6 py-12 md:px-20 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start">
          <div className="grid grid-cols-2 gap-6 w-full max-w-md">
            <img
              data-aos="fade-up"
              src="image7.png"
              alt="Image 1"
              className="w-full h-auto object-cover rounded-lg"
            />
            <img
              data-aos="fade-up"
              src="image8.png"
              alt="Image 2"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-5 text-center md:text-left items-center md:items-start">
          <h2
            data-aos="fade-up"
            className="text-[21px] md:text-[21px] text-[#FCD1CD] font-semibold leading-relaxed max-w-md"
          >
            "Company newsletters are essential in building relationships with
            your employees and customers."
          </h2>
          <h3
            data-aos="fade-up"
            className="text-lg leading-relaxed max-w-md text-[16px] md:text-[16px] "
          >
            Make your newsletter a beautiful representation of your company by
            inserting your logo, infusing it with your brand colors, and
            including official images from your files! Do you want to send out
            newsletters for Holi or Christmas? Do you want to show the fun side
            of your company for a change? Or do you want to use your company
            newsletter to advertise your new products or services to new and
            existing leads? The options are endless!
          </h3>
          <h3
            data-aos="fade-up"
            className="text-lg leading-relaxed max-w-md text-[16px] md:text-[16px] "
          >
            When sending out a company newsletter, keep in mind these three
            things. First, send out your newsletter regularly. Stick to your
            promise if it’s going to be weekly, monthly, or quarterly. The
            second is to have a proper layout. Make your newsletter interesting
            and easy to read. Lastly, ensure the quality of the content and
            images you will share.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Page5;
