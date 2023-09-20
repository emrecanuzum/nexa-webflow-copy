"use client";

import React from "react";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Logo from "../../public/nexa-logo.png";

export default function NavbarSide() {
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar position="static" className=" py-5 bg-transp">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Image className="w-[100%]" src={Logo} alt="logo" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarBrand className="hidden sm:flex">
        <Image className="w-[40%]" src={Logo} alt="logo" />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            className="pl-3 text-white text-sm font-light hover:text-spurple"
            href="#"
          >
            HOME
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            className="pl-3 text-white text-sm font-light hover:text-spurple"
            aria-current="page"
            href="#"
          >
            FEATURES
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            className="pl-3 text-white text-sm font-light hover:text-spurple"
            href="#"
          >
            INTEGRATIONS
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            className="pl-3 text-white text-sm font-light hover:text-spurple"
            href="#"
          >
            PRICING
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            className="pl-3 text-white text-sm font-light hover:text-spurple"
            href="#"
          >
            BLOG
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            className="pl-3 text-white text-sm font-light hover:text-spurple"
            href="#"
          >
            FAQS
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            className="bg-white grid-flow-row shadow-3xl  shadow-white text-black rounded-full w-[120%] smm:w-auto"
            href="#"
            variant="flat"
            color="default"
          >
            LEARN MORE
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
