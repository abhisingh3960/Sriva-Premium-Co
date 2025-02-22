import React from "react";

const Page3 = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-black min-h-screen px-6 py-16 gap-8">
      {/* Heading */}
      <h1
        data-aos="fade-up"
        className="text-white text-[56px] sm:text-[56px] md:text-6xl font-extrabold tracking-wide leading-tight"
      >
        "MAKE YOUR{" "}
        <span className="text-pink-300">NEWSLETTER</span> A<br /> BEAUTIFUL
        REPRESENTATION<br /> OF YOUR COMPANY."
      </h1>

      {/* Paragraph */}
      <p
        data-aos="fade-up"
        className="text-lg text-gray-300 max-w-xl sm:max-w-2xl text-[16px]"
      >
        Company newsletters are essential in building relationships with your
        employees, customers, or even prospective clients. Since a company
        newsletter can serve a variety of purposes, ensure the messages you will
        publish are aligned with your objective.
      </p>
    </div>
  );
};

export default Page3;
