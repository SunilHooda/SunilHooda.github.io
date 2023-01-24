import { Box, Center, Container, VStack, HStack, Text } from "@chakra-ui/react";
import React from "react";
import Calendar from "./GithubCalendar";
import GithubStats from "./GithubStats";
import TechStack from "./TechStack";
import ToolStack from "./ToolStack";

const SkillSet = () => {
  return (
    <Box name={"Skills"} pt={"70px"} pb={"20px"}>
      <Container maxW={"container.xl"}>
        <Center>
          <VStack>
            <HStack
              fontSize={{ base: "2xl", sm: "2xl", md: "4xl", lg: "5xl" }}
              fontWeight="bold"
              mb={"-10px"}
            >
              <Text>My</Text>
              <Text color={"#2F7693"}>Skills</Text>
            </HStack>
            <Text fontSize={"18px"} color="#7e80e6">
              These are the technologies I've worked with
            </Text>
            <br />
            <HStack
              fontSize={{ base: "2xl", sm: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight="bold"
              mb={"20px"}
            >
              <Text>Professional</Text>
              <Text color={"#2F7693"}>Skillset </Text>
            </HStack>
            <TechStack />
            <br />
            <br />
            <HStack
              fontSize={{ base: "2xl", sm: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight="bold"
              margin={"auto"}
              mb={"20px"}
            >
              <Text color={"#2F7693"}>Tools </Text>
              <Text>I use</Text>
            </HStack>
            <ToolStack />
            <br />
            <br />
            <HStack
              fontSize={{ base: "2xl", sm: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight="bold"
              margin={"auto"}
              mb={"20px"}
            >
              <Text>My</Text>
              <Text color={"#2F7693"}>Github Calendar</Text>
            </HStack>
            <Calendar />
            <br />
            <br />
            <HStack
              fontSize={{ base: "2xl", sm: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight="bold"
              margin={"auto"}
              mb={"20px"}
            >
              <Text>My</Text>
              <Text color={"#2F7693"}>Github Statistics</Text>
            </HStack>
            <GithubStats />
          </VStack>
        </Center>
      </Container>
    </Box>
  );
};

export default SkillSet;
