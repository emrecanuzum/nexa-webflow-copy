import React from "react";
import Image from "next/image";
import circleText from "../../public/circleText.png";

const Title = () => {
  return (
    <>
      <h1 className="block text-6xl smm:text-4xl text-center font-bold leading-tight">
        AI Powered <br></br>Next Gen
        <span className="pb-4 pl-3 text-transparent bg-clip-text bg-gradient-to-r from-spurple to-cyan-500">
          Analytics
        </span>
      </h1>
      <div className="absolute smm:relative smm:mt-5 animate-spinslow w-28 right-[20%] mt-10 smm:my-0 smm:mx-auto smm:right-0">
        <Image src={circleText} alt=""></Image>
      </div>
      <p className="text-center font-extralight text-xl pb-10 pt-5 w-[40%] smm:w-[80%] my-0 mx-auto">
        Real time AI-powered insights, advanced data visualization, and next
        level intelligent prediction capabilities.
      </p>
    </>
  );
};

export default Title;
