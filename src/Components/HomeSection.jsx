import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { GrMail } from "react-icons/gr";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import resume from "./assets/SunilHoodaResume.pdf";

const Home = () => {
  return (
    <Box name="Home">
      <Center height={"645px"}>
        <Flex
          mt={"50px"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={10}
          p={"25px 50px"}
          flexWrap={{
            base: "wrap-reverse",
            sm: "wrap-reverse",
            md: "nowrap",
            lg: "nowrap",
          }}
        >
          <VStack>
            <HStack p={"2px"} gap={2}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/sunilhooda/"
              >
                <FaLinkedin className="social-media-icon" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/SunilHooda"
              >
                <FaGithubSquare className="social-media-icon" />
              </a>
              <a
                href="mailto:sunilhooda698@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <GrMail className="social-media-icon" />
              </a>
            </HStack>

            <HStack
              fontSize={{ base: "xl", sm: "xl", md: "28px", lg: "4xl" }}
              fontWeight="bold"
            >
              <Text>Hello, I'm</Text>
              <Text color={"#2F7693"}>Sunil Hooda</Text>
            </HStack>

            <Text
              fontSize={{ base: "2xl", sm: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight="bold"
            >
              <Typewriter
                className="typicalText"
                options={{
                  strings: ["MERN STACK", "WEB DEVELOPER", "LOVE TO CODE ❤️"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 100,
                }}
              />
            </Text>

            <Text fontSize={"xl"}>
              It's nice to meet you. Hope you enjoy your stay.
            </Text>

            <HStack>
              <a href={resume} target="_blank" rel="noreferrer">
                <Button
                  backgroundColor="#343e47"
                  color="#ffffff"
                  fontSize={18}
                  borderRadius={10}
                  _hover={{ backgroundColor: "#5b84b1ff" }}
                >
                  Get Resume
                </Button>
              </a>
            </HStack>
          </VStack>

          <Flex
            borderRadius={"10%"}
            boxShadow="0 1px 0px 0px #52575d"
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box h="90%" w="90%" pb={5}>
              <Image
                src="https://avatars.githubusercontent.com/u/105985748?v=4"
                alt="Sunil Hooda"
                className="profilePicture"
              />
            </Box>
          </Flex>
        </Flex>
      </Center>
    </Box>
  );
};

export default Home;
