import {
  Box,
  Container,
  Flex,
  HStack,
  Image,
  VStack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { FaPhoneSquareAlt, FaGithubSquare } from "react-icons/fa";
import laptopImg from "./assets/about.png";

const Contact = () => {
  return (
    <Box name="Contacts" pt={"70px"} pb={"25px"}>
      <Container maxW={"container.xl"}>
        <Flex
          direction={["column", "column", "row", "row"]}
          margin={"auto"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          gap={[1, 1, 30, 30]}
        >
          <VStack
            gap={10}
            justifyContent="center"
            alignItems={"center"}
            paddingTop="30px"
            paddingBottom="50px"
          >
            <HStack
              fontSize={{ base: "2xl", sm: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight="bold"
              mb={"-10px"}
            >
              <Text>Connect with</Text>
              <Text color={"#2F7693"}>ME</Text>
            </HStack>
            <Flex
              direction={["column", "column", "row", "row"]}
              margin={"auto"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={[6, 6, 30, 30]}
              fontSize={{ base: "lg", sm: "lg", md: "xl", lg: "2xl" }}
              padding={4}
            >
              <VStack>
                <BsLinkedin size={35} />
                <a
                  href="https://www.linkedin.com/in/sunilhooda"
                  target="_blank"
                  rel="noreferrer"
                  className="contact_info"
                >
                  Sunil Hooda
                </a>
              </VStack>
              <VStack>
                <FaGithubSquare size={40} />
                <a
                  href="https://github.com/SunilHooda"
                  target="_blank"
                  rel="noreferrer"
                  className="contact_info"
                >
                  Sunil Hooda
                </a>
              </VStack>
            </Flex>
            <Flex
              direction={["column", "column", "row", "row"]}
              margin={"auto"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={[6, 6, 15, 30]}
              fontSize={{ base: "lg", sm: "lg", md: "xl", lg: "2xl" }}
              padding={4}
            >
              <VStack>
                <GrMail size={40} />
                <a
                  href="mailto:sunilhooda698@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="contact_info"
                >
                  sunilhooda698@gmail.com
                </a>
              </VStack>
              <VStack>
                <FaPhoneSquareAlt size={40} />
                <a
                  href="tel:+917988064014"
                  rel="noreferrer"
                  className="contact_info"
                >
                  +91 7988064014
                </a>
              </VStack>
            </Flex>
          </VStack>
          <HStack>
            <Image
              src={laptopImg}
              alt="about"
              height={"400px"}
              width={"500px"}
            />
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Contact;
