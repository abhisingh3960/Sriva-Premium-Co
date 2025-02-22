import React from "react";

const Footer = () => {
  return (
    <div className="px-6 md:px-14  bottom-0 w-full bg-[rgba(252,209,205,1)] py-6 flex flex-col md:flex-row justify-center md:justify-between items-center text-center md:text-left">
      <h1 className="text-[56px] md:text-[56px] font-bold leading-tight">
        GOT SUGGESTIONS <br /> OR QUESTIONS?
      </h1>
      <h3 className="text-[21px] md:text-[21px] font-medium mt-4 md:mt-0">
        Reach out via email:<br /> 
        <span>hello@reallygreatsite.com</span>
      </h3>
    </div>
  );
};

export default Footer;
