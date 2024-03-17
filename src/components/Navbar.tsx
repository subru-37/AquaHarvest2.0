"use client";

import { useMyContext } from "@/contexts/ContextApi";
import { Box, Button, IconButton, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import useNavbar from "@/hooks/useNavbar";
import { MoonIcon } from "@chakra-ui/icons";
import { SunIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
const Navbar = () => {
  const { palette } = useMyContext();
  const { colorMode, toggleColorMode } = useColorMode();
  const [scroll, scrollp] = useNavbar();
  const Navlinks = [
    { name: "Commitments", link: "/commitments" },
    { name: "Services", link: "/services" },
    { name: "Contact Us", link: "/footer" },
  ];
  return (
    <Box
      sx={{
        backgroundColor: palette.background,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "100%",
        minHeight: "80px",
        boxShadow: colorMode === 'light' ? "0px 4px 6px rgba(0, 0, 0, 0.1)" : "0px 4px 6px rgba(256,256,256, 0.2)",
        visibility: scroll ? "hidden" : "visible",
        transition: scroll ? "visibility 0.2s, opacity 0.2s linear" : "0.2s",
        opacity: scroll ? "0" : "1",
        position: "fixed",
        top: "0",
        zIndex: "100",
      }}
    >
      <Box
        sx={{
          minWidth: "90vw",
          minHeight: "75px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          color={palette.background}
          fontSize="1.5rem"
          position={"relative"}
          letterSpacing={'1.5px'}
          width="250px"
          cursor={"pointer"}
        >
          Aqua Harvest 2.0
          <span>
            <Box
              sx={{
                position: "absolute",
                top: "-2px",
                left: "2px",
              }}
              color={palette.text}
              fontSize={"1.5rem"}
              // fontFamily={''}
            >
              Aqua Harvest 2.0
            </Box>
          </span>
        </Box>
        <Box
          sx={{
            display: { base: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "space-between",
            height: "50px",
            padding: "15px",
            width: "400px",
            marginRight: { base: "0", md: "125px" },
            border: `1px solid ${palette.text}`,
            borderRadius: "50px",
          }}
        >
          {Navlinks.map((value, index) => {
            return (
              <Text
                key={index}
                fontWeight={'500'}
                cursor={"pointer"}
                sx={{
                  color: palette.text,
                  fontSize: "1.1rem",
                  "&:hover": {
                    // textDecoration:'underline',
                    color: palette.text,
                    fontWeight: "500",
                  },
                }}
              >
                {value.name}
              </Text>
            );
          })}
        </Box>
        <Box sx={{
          display:'flex',
          alignItems:'center',
          justifyContent:'space-between',
          flexDirection:'row',
          width:'150px'
        }}>
          <Button onClick={toggleColorMode} sx={{
            border:`1px solid ${palette.text}`,
            borderRadius:'20px', 
          }}>
            <Icon zIndex={'50'}>{colorMode === "light" ? <SunIcon /> : <MoonIcon />}</Icon>
          </Button>
          <Button
            border={`1px solid ${palette.text}`}
            color={palette.text}
            borderRadius={'50px'}
          >
            <Text>Sign Up</Text>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
