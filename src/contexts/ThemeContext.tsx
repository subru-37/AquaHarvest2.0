// theme.js
"use client";

import { extendTheme } from "@chakra-ui/react";

import { StyleConfig } from "@chakra-ui/theme-tools";

const theme: Record<string, StyleConfig> = extendTheme({
  colors: {
    dark: {
      primary: "#28ccc1",
      secondary: "#2f6a64",
      tertiary: "#9cbae7",
      background: "#050001",
      text: "#e0e0e0",
    },
    light: {
      primary: "#33d7cc",
      secondary: "#95d0ca",
      tertiary: "#183663",
      background: "#fffafb",
      text: "#1f1f1f",
    },
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    body: '"Raleway", sans-serif',
    heading: '"Raleway", sans-serif',
    default: '"Raleway", sans-serif',
  },
  components: {
    Button: {
      baseStyle: (colorMode: any) => {
        // console.log(colorMode);
        // return {
        //   backgroundColor: colorMode.colorMode === "light" ? "#fffafb" : "#050001",
        //   _hover: {
        //     backgroundColor: colorMode.colorMode === "light" ? "#fffafb" : "#050001",
        //   },
        // };
      },
      variants: (colorMode: any) => {
        return {
          solid: {
            backgroundColor: colorMode.colorMode === "light" ? "#fffafb" : "#050001",
            _hover: {
              backgroundColor: colorMode.colorMode === "light" ? "#fffafb" : "#050001",
            },
            border: colorMode.colorMode === "light" ? '1px solid #e0e0e0' : '1px solid #1f1f1f',
            borderRadius: '50px'
          },
        };
      },
    },
  },
});

export default theme;
