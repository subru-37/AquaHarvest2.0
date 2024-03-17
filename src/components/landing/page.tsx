"use client";

import React from "react";
import Image from "next/image";
import { Box, Button, Icon, Text, useColorMode } from "@chakra-ui/react";
import { useImageSize } from "react-image-size";
import herolight from "@/assets/HeroImage-light.png";
import herodark from "@/assets/HeroImage-dark.png";
import Background from "../Background/Background";
import { useMyContext } from "@/contexts/ContextApi";
import { FaExternalLinkAlt } from "react-icons/fa";

const Landing = () => {
  console.log(herodark);
  const { colorMode } = useColorMode();
  const { palette } = useMyContext();
  return (
    <Box
      sx={{
        // backgroundImage:
        //   colorMode === "light" ? `url(${herolight.src})` : "none",
        // backgroundRepeat: "no-repeat",
        // backgroundPosition: "top left",
        // backgroundSize: {
        //   base: `1200px calc(1200px * ${herodark.height / herodark.width})`,
        //   lg: "100%",
        // },
        // height: {
        //   base: `calc(1200px * ${herodark.height / herodark.width})`,
        //   lg: `calc(100vw * ${herodark.height / herodark.width})`,
        // },
        height: "100vh",
        width: "100%",
        // maxHeight:'130vh',
        // height:'100vh',
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
      }}
    >
      <Background />
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          width: { base: "95vw", md: "90vw" },
          height: "90vh",
          marginTop: "150px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexDirection: "column",
            padding: { base: "0", md: "0 50px" },
            height: "45%",
            width: { base: "90vw", md: "75vw" },
          }}
        >
          <Text
            sx={{
              // fontSize:'3rem',
              fontSize: { base: "2.7rem", md: "3.7rem" },
              fontFamily: '"Raleway", sans-serif',
              // wordSpacing:'-1px',
              lineHeight: "65px",
            }}
          >
            Start your{" "}
            <span style={{ color: palette.primary, fontStyle: "italic" }}>
              Marine Fish Farm
            </span>{" "}
            <br />
            Journey!
          </Text>
          <Button
            cursor={"pointer"}
            sx={{
              border: `2px solid ${palette.text}`,
              borderRadius: "20px",
              color:palette.text
            }}
            _hover={{
              border: `2px solid ${palette.primary}`,
              color:palette.primary
            }}
          >
            <Text
              fontSize={"1.2rem"}
            >
              Get Started{" "}
              <Icon as={FaExternalLinkAlt} sx={{ fontSize: "0.9rem" }} />
            </Text>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Landing;
