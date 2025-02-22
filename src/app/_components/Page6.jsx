import React from "react";

const Page6 = () => {
  return (
    <div className="bg-black px-6 py-10 md:px-16 md:py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h1 
            data-aos="fade-up" 
            className="text-white text-4xl md:text-5xl font-bold mb-6"
          >
            THE SHORTLIST
          </h1>
          <p 
            data-aos="fade-up" 
            className="text-white text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0"
          >
            It’s very crucial to plan how your company newsletter will come to
            life. Will you be assigning the writing tasks to your employees who
            are good with words or hiring an off-site employee for the task?
            Who will provide the images? These are just some of the many
            questions you need to answer.
          </p>
        </div>

        {/* Right Section */}
        <div className="border-2 border-[#FCD1CD] p-6 md:p-8 space-y-8 text-center md:text-left rounded-lg">
          {[
            { 
              title: "Keep Break Time Sacred", 
              content: "Ensure the messages you publish align with your objectives and maintain company culture." 
            },
            { 
              title: "Reach out to your peers", 
              content: "Engage your employees by including interactive content and seeking feedback regularly." 
            },
            { 
              title: "Connection is key", 
              content: "Strengthen communication across departments to create a well-informed workplace." 
            }
          ].map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h3 
                data-aos="fade-up" 
                className="text-[#FCD1CD] text-xl md:text-2xl font-semibold"
              >
                {item.title}
              </h3>
              <p 
                data-aos="fade-up" 
                className="text-white text-base md:text-lg leading-relaxed"
              >
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page6;
