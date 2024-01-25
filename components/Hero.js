import React from "react";
import Tags from "./Tags";

function Hero() {
  return (
    <>
      <div className="max-w-full h-[500px] md:mb-0 bg-gradient-to-b from-sky-100/10 to-sky-500 flex justify-end items-end" >
        <img
          src="./background.svg"
          alt="Background Image"
          className="object-cover h-96 w-full"
        />
      </div>
      <div className="text-center">
        <Tags />
      </div>
    </>
  );
}

export default Hero;
