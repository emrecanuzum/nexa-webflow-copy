import React from "react";

const ImageDesc = (props: { main: string; desc: string }) => {
  return (
    <main className="w-full  md:w-2/3  mt-[10%]">
      <h3 className="text-5xl px-[20%] smm:text-center font-bold">
        {props.main}
      </h3>
      <p
        className=" font-thin text-lg mt-8 w-[80%] px-[10%] md:w-[40%] 
      my-0 mx-auto smm:text-center md:text-left"
      >
        {props.desc}
      </p>
    </main>
  );
};

export default ImageDesc;
