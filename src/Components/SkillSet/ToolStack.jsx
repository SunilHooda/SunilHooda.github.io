import React from "react";
import { Grid, GridItem, Image, Text, VStack } from "@chakra-ui/react";

const ToolStack = () => {
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
        border={"1.7px solid #1E90FF"}
        _hover={{ border: "2.2px solid #1E90FF" }}
      >
        <VStack
          w={{ base: "70px", sm: "50px", md: "160px", lg: "180px" }}
          style={skillCard}
        >
          <Text mt={1}>VS Code</Text>
          <Image
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"
            }
            alt=""
            width={"60%"}
            height={"60%"}
          />
        </VStack>
      </GridItem>

      <GridItem
        className="techIcons"
        border={"1.7px solid black"}
        _hover={{ border: "2.2px solid black" }}
      >
        <VStack style={skillCard}>
          <Text mt={1}>Github</Text>
          <Image
            src={"https://cdn-icons-png.flaticon.com/512/25/25231.png"}
            alt=""
            width={"100%"}
            height={"70%"}
            mt={"-5px"}
          />
        </VStack>
      </GridItem>

      <GridItem
        className="techIcons"
        border={"1.7px solid teal"}
        _hover={{ border: "2.2px solid teal" }}
      >
        <VStack style={skillCard}>
          <Text mt={1}>Netlify</Text>
          <Image
            src={"https://cdn.cdnlogo.com/logos/n/75/netlify.svg"}
            alt=""
            width={"100%"}
            height={"70%"}
            mt={"-5px"}
          />
        </VStack>
      </GridItem>

      <GridItem
        className="techIcons"
        border={"1.7px solid black"}
        _hover={{ border: "2.2px solid black" }}
      >
        <VStack style={skillCard}>
          <Text mt={1}>Vercel</Text>
          <Image
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTNjR6CVYo-TUMdQe2M1V_OVi3ce7bJHnwjA&usqp=CAU"
            }
            alt=""
            width={"100%"}
            height={"70%"}
            mt={"-5px"}
          />
        </VStack>
      </GridItem>

      <GridItem
        className="techIcons"
        border={"1.7px solid #FF8C00"}
        _hover={{ border: "2.2px solid #FF8C00" }}
      >
        <VStack style={skillCard}>
          <Text mt={1}> Postman</Text>
          <Image
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSiVNjqy7i4sJwZqoFMEyjSF02KpEmZmqW6NGJEsWS5QaLLpncWgPIIwUMusrU3RLDM-0&usqp=CAU"
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

export default ToolStack;
