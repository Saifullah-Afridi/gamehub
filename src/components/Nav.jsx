import React from "react";
import logo from "../assets/logo.webp";
import ToggleSiteColor from "./ToggleSiteColor";
import { HStack, Image } from "@chakra-ui/react";

const Nav = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"15px"}>
      <Image src={logo} width={"100px"}></Image>
      <ToggleSiteColor />
    </HStack>
  );
};

export default Nav;
