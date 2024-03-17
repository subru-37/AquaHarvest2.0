"use client";

import Image from "next/image";
// import styles from "./page.module.css";
import { Box, Text, useColorMode } from "@chakra-ui/react";
import theme from "@/contexts/ThemeContext";
import { MyContext, useMyContext } from "@/contexts/ContextApi";
import { useContext } from "react";
import Navbar from "@/components/Navbar";
import Landing from "@/components/landing/page";
// import from "./landing/page";
export default function Home() {
  const {palette} = useMyContext();
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    // <ChakraProvider theme={theme}>
      <Box bg={palette.background} sx={{
        minHeight:'200vh'
      }}>
       <Navbar/>
       <Landing/>
      </Box>
    // </ChakraProvider>
  );
}
