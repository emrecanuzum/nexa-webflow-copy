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
    <Navbar position="static" className=" pt-5 bg-transparent">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Image className="w-[100%]" src={Logo} alt="logo" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarBrand className="hidden sm:flex">
        <Image className="w-[25%]" src={Logo} alt="logo" />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            className="text-white text-sm font-light hover:text-purple-500"
            href="#"
          >
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            className="text-white text-sm font-light hover:text-purple-500"
            aria-current="page"
            href="#"
          >
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            className="text-white text-sm font-light hover:text-purple-500"
            href="#"
          >
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            className="bg-white grid-flow-row"
            href="#"
            variant="flat"
          >
            Learn More
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
