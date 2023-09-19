"use client";

import React from "react";
import Image from "next/image";
import style from "../styles/Landing.module.css";
import Laptop from "../../public/laptop.png";
import { Button, ButtonGroup } from "@nextui-org/react";
import Title from "./Title";
import LogoSlide from "./LogoSlide";

const Landing = () => {
  return (
    <main className="z-10 flex-col mt-32 content-center">
      <Title></Title>
      <div className={style.buttonbox}>
        <Button
          className="mx-2 md:mx-5"
          size="lg"
          color="secondary"
          radius="full"
          variant="shadow"
        >
          Download App
        </Button>
        <Button
          className="mx-2 md:mx-5"
          size="lg"
          color="secondary"
          radius="full"
          variant="bordered"
        >
          View Features
        </Button>
      </div>

      <div className={style.laptop}>
        <Image
          className="w-[80%] md:w-[80%] mt-24 mb-16 mx-auto"
          src={Laptop}
          alt="laptop"
        />
      </div>
      <LogoSlide></LogoSlide>
    </main>
  );
};

export default Landing;
