import {
  Box,
  Flex,
  Image,
  VStack,
  Text,
  HStack,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const ProjectCard = ({ props }) => {
  return (
    <Box className="projectCardView">
      <Flex>
        <VStack gap={"2px"}>
          <Box w={"100%"} h={"100%"} paddingBottom={3} borderRadius="10px">
            <Image src={props.image} alt="card-img" w={"100%"} h={"100%"} />
          </Box>

          <Text fontSize={"xl"} fontWeight={"bold"}>
            {props.name}
          </Text>
          <Text fontSize={"17px"} textAlign={"justify"}>
            {props.desc}
          </Text>
          <Text>
            <Text as={"span"} fontWeight={"600"}>
              Tech Stack :{" "}
            </Text>
            <Text as={"span"}>{props.techStack}</Text>
          </Text>
          <HStack marginTop={"5px"}>
            <a href={props.gitlink} target={"_blank"} rel="noopener noreferrer">
              <Button variant="primary" className="btnPrimary" target="_blank">
                <BsGithub /> &nbsp; {"Github"}
              </Button>
            </a>
            <a
              href={props.livelink}
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <Button variant="primary" className="btnPrimary" target="_blank">
                <CgWebsite /> &nbsp;
                {"Live"}
              </Button>
            </a>
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
};

export default ProjectCard;
