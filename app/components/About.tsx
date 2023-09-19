"use client";

import Image from "next/image";
import ImageDesc from "./ImageDesc";
import React, { useState } from "react";
import Graph1 from "../../public/graph.jpeg";
import Graph2 from "../../public/graph2.jpeg";
import Graph3 from "../../public/graph3.jpeg";
import Solar from "../../public/solar.png";

const About = () => {
  return (
    <main>
      <div className="flex-col my-0 mx-auto">
        <div className="flex sm:grid  my-0 mx-auto text-center justify-center">
          <h2 className=" flex text-4xl lg:text-5xl  text-center font-bold">
            Intelligent
          </h2>
          <div className="pl-2 lg:pl-4 text-4xl md:text-5xl text-center font-bold text-transparent line bg-clip-text bg-gradient-to-r from-purple-500 to-cyan">
            Deep ML
          </div>
        </div>
        <p className="text-center font-thin lg:text-xl sm:text-base p-10 sm:w-[100%] lg:w-[60%] my-0 mx-auto">
          Our AI dashboard leverages machine learning algorithms to analyze
          data, identify patterns, and make predictions.
        </p>
      </div>

      <div className="flex smm:grid w-[100%] my-0 mx-auto">
        <ImageDesc
          main="Advanced Data Visualization"
          desc="Next-gen dashboards go beyond traditional charts and graphs, utilizing advanced visualization techniques such as heatmaps, network graphs, and 3D representations to convey complex relationships in the data."
        ></ImageDesc>
        <Image
          className="bg-gradient-to-b from-cyan to-purple-500 py-20 pl-10 rounded-md w-[40%] smm:w-full h-auto my-8 mr-32"
          src={Graph1}
          alt="graph"
        />
      </div>

      <div className="flex smm:grid w-[100%] my-0 mx-auto">
        <Image
          className="bg-gradient-to-b from-cyan to-purple-500 px-10 rounded-md pt-10 w-[40%] h-auto my-8 ml-32"
          src={Graph2}
          alt="graph2"
        />
        <ImageDesc
          main="Advanced Data Visualization"
          desc="Next-gen dashboards go beyond traditional charts and graphs, utilizing advanced visualization techniques such as heatmaps, network graphs, and 3D representations to convey complex relationships in the data."
        ></ImageDesc>
      </div>

      <div className="flex smm:grid w-[100%] my-0 mx-auto">
        <ImageDesc
          main="Advanced Data Visualization"
          desc="Next-gen dashboards go beyond traditional charts and graphs, utilizing advanced visualization techniques such as heatmaps, network graphs, and 3D representations to convey complex relationships in the data."
        ></ImageDesc>
        <Image
          className="bg-gradient-to-b from-cyan to-purple-500 pt-20 pl-28 rounded-md w-[40%] h-auto my-8 mr-32"
          src={Graph3}
          alt="graph"
        />
      </div>

      <Image
        className="hidden smm:visible w-[80%] h-auto my-0 mt-28 mx-auto"
        src={Solar}
        alt="graph"
      />
      <Image
        className="visible md:hidden w-[80%] h-auto my-0 mt-28 mx-auto"
        src={Solar}
        alt="graph"
      />
    </main>
  );
};

export default About;
