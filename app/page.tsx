import Image from "next/image";
import { Button } from "@nextui-org/button";
import NavbarSide from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import SolarImage from "../public/bg.jpeg";

export default function Home() {
  return (
    <main
      className=" bg-[url('../public/bg.jpeg')]
    flex min-h-screen flex-col items-center bg-no-repeat"
    >
      <NavbarSide></NavbarSide>
      <Landing></Landing>
      <About></About>
    </main>
  );
}
