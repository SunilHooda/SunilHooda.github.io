import {
  Box,
  Center,
  Container,
  VStack,
  HStack,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React from "react";
import ProjectCard from "./ProjectCard";
import { Projectdata } from "./ProjectData";

const ProjectSection = () => {
  return (
    <Box name="Projects" pt={"70px"} pb={"20px"}>
      <Container maxW={"container.xl"}>
        <Center>
          <VStack>
            <HStack
              fontSize={{ base: "2xl", sm: "2xl", md: "4xl", lg: "5xl" }}
              fontWeight="bold"
              mb={"-10px"}
            >
              <Text>My Recent</Text>
              <Text color={"#2F7693"}>Projects</Text>
            </HStack>
            <Text fontSize={"18px"} color="#7e80e6">
              Here are a few projects I've worked on recently.
            </Text>
            <br />
            <Grid
              w="full"
              templateColumns={{
                base: "repeat(1, 1fr)",
                sm: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              }}
              p={"10px"}
              justifyContent={"center"}
              gap={10}
            >
              {Projectdata.map((item) => (
                <GridItem key={item.id}>
                  <ProjectCard props={item} key={item.id} />
                </GridItem>
              ))}
            </Grid>
          </VStack>
        </Center>
      </Container>
    </Box>
  );
};

export default ProjectSection;
