import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Box w={"full"} bg={"#2F7693"} p={"14px 0px"} align={"center"}>
      <Flex
        direction={["column", "column", "row", "row"]}
        justifyContent={"space-around"}
        alignItems={"center"}
        fontSize={"1em"}
        color={"white"}
      >
        <Box>
          <Text>Made with ❤️ by Sunil Hooda</Text>
        </Box>
        <Box>
          <Text>Copyright © 2022 - {year}</Text>
        </Box>
        <Flex gap={2} justifyContent={"center"} alignItems={"center"}>
          <a
            href="https://github.com/SunilHooda"
            color="white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/sunilhooda/"
            color="white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="mailto:sunilhooda698@gmail.com"
            color="white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGmail />
          </a>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
