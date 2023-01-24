import { Box, Center, Text, HStack, VStack, Button } from "@chakra-ui/react";
import React from "react";
import { GrMail } from "react-icons/gr";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import resume from "./assets/SunilHoodaResume.pdf";

const AboutMe = () => {
  return (
    <Box name="About" pt={"40px"} pb={"20px"}>
      <Center height={"645px"}>
        <VStack>
          <HStack
            fontSize={{ base: "2xl", sm: "2xl", md: "4xl", lg: "5xl" }}
            fontWeight="bold"
            mb={"20px"}
          >
            <Text>About</Text>
            <Text color={"#2F7693"}>ME</Text>
          </HStack>

          <VStack
            w={"85%"}
            m={"auto"}
            padding={"2% 10%"}
            boxShadow={"0 4px 5px 3px rgba(119, 53, 136, 0.459)"}
          >
            <HStack
              fontSize={{ base: "lg", sm: "lg", md: "xl", lg: "3xl" }}
              fontWeight="bold"
            >
              <Text>Hello, I'm</Text>
              <Text color={"#5b84b1ff"}>Sunil Hooda</Text>
            </HStack>

            <VStack fontSize={{ base: "lg", sm: "lg", md: "xl", lg: "xl" }}>
              <Text>
                Full Stack Web Developer skilled in MERN stack who focuses on
                writing clean, elegant and efficient code.
              </Text>
              <Text>
                I'm a passionate learner who's always willing to learn and work
                across technologies and domains. I love to explore new
                technologies and leverage them to solve real-life problems.
              </Text>
            </VStack>
            <br />
            <br />

            <Text fontSize="20px" color="#008008">
              Feel Free To Connect
            </Text>

            <HStack fontSize={"18px"}>
              <Text fontWeight="bold" color="black">
                Mobile :{" "}
              </Text>
              <Text color={"#5b84b1ff"}>7988064014</Text>
            </HStack>

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
        </VStack>
      </Center>
    </Box>
  );
};

export default AboutMe;
