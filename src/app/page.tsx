import Image from "next/image";
// import styles from "./page.module.css";
import { Text } from "@chakra-ui/react";
import theme from "@/contexts/ThemeContext";

export default function Home() {
  return (
    // <ChakraProvider theme={theme}>
      <main>
        <Text color={'light.text'}>
          Hello world!
        </Text>
      </main>
    // </ChakraProvider>
  );
}
