import React from "react";
import htmlIcon from "../assets/htmlIcon.svg";
import cssIcon from "../assets/cssIcon.svg";
import jsIcon from "../assets/jsIcon.svg";
import reactIcon from "../assets/reactIcon.svg";
import reduxIcon from "../assets/reduxIcon.svg";
import expressIcon from "../assets/expressIcon.svg";
import nodeIcon from "../assets/nodeIcon.svg";
import mongoIcon from "../assets/mongoIcon.svg";
import { Grid, GridItem, Image, Text, VStack } from "@chakra-ui/react";

const TechStack = () => {
  const skillCard = {
    height: "130px",
    fontWeight: "bold",
    padding: "0px 10px 9px 10px",
    fontSize: "20px",
  };

  return (
    <Grid
      w="full"
      templateColumns={{
        base: "repeat(2, 1fr)",
        sm: "repeat(2, 1fr)",
        md: "repeat(4, 1fr)",
        lg: "repeat(5, 1fr)",
      }}
      gap={{ base: "20px", sm: "15px", md: "30px", lg: "35px" }}
    >
      <GridItem
        className="techIcons"
        border={"1.7px solid orange"}
        _hover={{ border: "2.2px solid orange" }}
      >
        <VStack
          w={{ base: "70px", sm: "50px", md: "160px", lg: "180px" }}
          style={skillCard}
        >
          <Text mt={1}>HTML</Text>
          <Image src={htmlIcon} alt="" width={"100%"} height={"70%"} />
        </VStack>
      </GridItem>

      <GridItem
        className="techIcons"
        border={"1.7px solid #1E90FF "}
        _hover={{ border: "2.2px solid #1E90FF " }}
      >
        <VStack style={skillCard}>
          <Text mt={1}>CSS</Text>
          <Image
            src={cssIcon}
            alt=""
            width={"100%"}
            height={"70%"}
            mt={"-5px"}
          />
        </VStack>
      </GridItem>

      <GridItem
        className="techIcons"
        border={"1.7px solid #FFD700"}
        _hover={{ border: "2.2px solid #FFD700" }}
      >
        <VStack style={skillCard}>
          <Text mt={1}>JavaScript</Text>
          <Image
            src={jsIcon}
            alt=""
            width={"100%"}
            height={"70%"}
            mt={"-5px"}
          />
        </VStack>
      </GridItem>

      <GridItem
        className="techIcons"
        border={"1.7px solid #1E90FF"}
        _hover={{ border: "2.2px solid #1E90FF" }}
      >
        <VStack style={skillCard}>
          <Text mt={1}>ReactJS</Text>
          <Image
            src={reactIcon}
            alt=""
            width={"100%"}
            height={"70%"}
            mt={"-5px"}
          />
        </VStack>
      </GridItem>

      <GridItem
        className="techIcons"
        border={"1.7px solid #9400D3"}
        _hover={{ border: "2.2px solid #9400D3" }}
      >
        <VStack style={skillCard}>
          <Text mt={1}>Redux</Text>
          <Image
            src={reduxIcon}
            alt=""
            width={"100%"}
            height={"70%"}
            mt={"-5px"}
          />
        </VStack>
      </GridItem>

      <GridItem
        className="techIcons"
        border={"1.7px solid #00BFFF"}
        _hover={{ border: "2.2px solid #00BFFF" }}
      >
        <VStack style={skillCard}>
          <Text mt={1}>ChakraUI</Text>
          <Image
            src={"https://img.stackshare.io/service/12421/rzylUjaf_400x400.jpg"}
            alt=""
            width={"100%"}
            height={"70%"}
            mt={"-5px"}
          />
        </VStack>
      </GridItem>

      <GridItem
        className="techIcons"
        border={"1.7px solid #2F4F4F "}
        _hover={{ border: "2.2px solid #2F4F4F " }}
      >
        <VStack style={skillCard}>
          <Text mt={1}>NodeJS</Text>
          <Image
            src={nodeIcon}
            alt=""
            width={"100%"}
            height={"70%"}
            mt={"-5px"}
          />
        </VStack>
      </GridItem>

      <GridItem
        className="techIcons"
        border={"1.7px solid #228B22 "}
        _hover={{ border: "2.2px solid #228B22 " }}
      >
        <VStack style={skillCard}>
          <Text mt={1}>ExpressJS</Text>
          <Image
            src={expressIcon}
            alt=""
            width={"100%"}
            height={"70%"}
            mt={"-5px"}
          />
        </VStack>
      </GridItem>

      <GridItem
        className="techIcons"
        border={"1.7px solid #A52A2A "}
        _hover={{ border: "2.2px solid #A52A2A " }}
      >
        <VStack style={skillCard}>
          <Text mt={1}>MongoDB</Text>
          <Image
            src={mongoIcon}
            alt=""
            width={"100%"}
            height={"70%"}
            mt={"-5px"}
          />
        </VStack>
      </GridItem>

      <GridItem
        className="techIcons"
        border={"1.7px solid #8A2BE2 "}
        _hover={{ border: "2.2px solid #8A2BE2 " }}
      >
        <VStack style={skillCard}>
          <Text mt={1}>Bootstrap</Text>
          <Image
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png"
            }
            alt=""
            width={"100%"}
            height={"70%"}
            mt={"-5px"}
          />
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default TechStack;
