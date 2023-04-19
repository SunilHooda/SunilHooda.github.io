import React from "react";
import { Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlinePhone,
  AiOutlineRocket,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";
import resume from "./assets/Sunil-Hooda-Resume.pdf";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const hamStyle = {
    justifyContent: "center",
    alignItems: "center",
    gap: "0.3rem",
    color: "white",
    backgroundColor: "#2F7693",
    padding: "0.5rem ",
    borderRadius: "0.4rem",
    fontSize: "20px",
    fontWeight: "600",
    cursor: "pointer",
  };

  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/1Q4hvsaWK5yNJ0pfGeZdxfDO32-WRX_mL/view?usp=sharing"
    );
  };

  return (
    <Box
      w={"100%"}
      bg={"#2F7693"}
      p={"0px 15px"}
      position={"sticky"}
      top={0}
      zIndex={10}
    >
      <Flex h={"80px"} justify={"space-between"} alignItems={"center"}>
        {/* Name Logo */}

        <Link to="Home" smooth duration={600}>
          <Flex columnGap={"7px"} cursor={"pointer"}>
            <Flex justify={"center"} align={"center"}>
              <Text className="firstLetter">S</Text>
              <Text className="lastLetter">unil</Text>
            </Flex>
            <Flex justify={"center"} align={"center"}>
              <Text className="firstLetter"> H</Text>
              <Text className="lastLetter">ooda</Text>
            </Flex>
          </Flex>
        </Link>

        {/* Different Tabs */}
        <Flex
          display={["none", "none", "none", "flex"]}
          justify="space-between"
          alignItems={"center"}
          gap={"15px"}
        >
          <Link to="Home" smooth duration={600}>
            <Flex className="tabBox">
              <AiOutlineHome size={20} />
              <Text fontSize={"18px"}>HOME</Text>
            </Flex>
          </Link>

          <Link to="About" smooth duration={600}>
            <Flex className="tabBox">
              <AiOutlineUser size={18} />
              <Text fontSize={"18px"}>ABOUT ME</Text>
            </Flex>
          </Link>

          <Link to="Skills" smooth duration={600}>
            <Flex className="tabBox">
              <AiOutlineRocket size={20} />
              <Text fontSize={"18px"}>SKILLS</Text>
            </Flex>
          </Link>

          <Link to="Projects" smooth duration={600}>
            <Flex className="tabBox">
              <AiOutlineFundProjectionScreen size={20} />
              <Text fontSize={"18px"}>PROJECTS</Text>
            </Flex>
          </Link>

          <Link to="Contacts" smooth duration={700}>
            <Flex className="tabBox">
              <AiOutlinePhone size={20} />
              <Text fontSize={"18px"}>CONTACT</Text>
            </Flex>
          </Link>

          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
            download="Sunil-Hooda-Resume"
          >
            <Flex className="tabBox" onClick={handleClick}>
              <CgFileDocument size={20} />
              <Text fontSize={"18px"}>RESUME</Text>
            </Flex>
          </a>
        </Flex>

        {/*Hamburger Menu */}
        <Box
          display={["inline-block", "inline-block", "inline-block", "none"]}
          bg={"#e3e9ee"}
          p={"5px"}
          borderRadius={"5px"}
        >
          <GiHamburgerMenu color="black" onClick={onOpen} size={"40px"} />
        </Box>

        {/* HamBurger Drawer */}
        <Drawer isOpen={isOpen} onClose={onClose} placement="right">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Explore</DrawerHeader>
            <DrawerBody>
              <Link to="Home" smooth duration={600}>
                <Flex
                  m="25px auto"
                  style={hamStyle}
                  onClick={onClose}
                  _hover={{
                    backgroundColor: "#b7ced8",
                    boxShadow: "0 1px 1px 1px black",
                  }}
                >
                  <AiOutlineHome size={20} />
                  <Text fontSize={"18px"}>HOME</Text>
                </Flex>
              </Link>

              <Link to="About" smooth duration={600}>
                <Flex
                  m="25px auto"
                  style={hamStyle}
                  onClick={onClose}
                  _hover={{
                    backgroundColor: "#b7ced8",
                    boxShadow: "0 1px 1px 1px black",
                  }}
                >
                  <AiOutlineUser size={18} />
                  <Text fontSize={"18px"}>ABOUT ME</Text>
                </Flex>
              </Link>

              <Link to="Skills" smooth duration={600}>
                <Flex
                  m="25px auto"
                  style={hamStyle}
                  onClick={onClose}
                  _hover={{
                    backgroundColor: "#b7ced8",
                    boxShadow: "0 1px 1px 1px black",
                  }}
                >
                  <AiOutlineRocket size={20} />
                  <Text fontSize={"18px"}>SKILLS</Text>
                </Flex>
              </Link>

              <Link to="Projects" smooth duration={600}>
                <Flex
                  m="25px auto"
                  style={hamStyle}
                  onClick={onClose}
                  _hover={{
                    backgroundColor: "#b7ced8",
                    boxShadow: "0 1px 1px 1px black",
                  }}
                >
                  <AiOutlineFundProjectionScreen size={20} />
                  <Text fontSize={"18px"}>PROJECTS</Text>
                </Flex>
              </Link>

              <Link to="Contacts" smooth duration={700}>
                <Flex
                  m="25px auto"
                  style={hamStyle}
                  onClick={onClose}
                  _hover={{
                    backgroundColor: "#b7ced8",
                    boxShadow: "0 1px 1px 1px black",
                  }}
                >
                  <AiOutlinePhone size={20} />
                  <Text fontSize={"18px"}>CONTACT</Text>
                </Flex>
              </Link>

              <a href={resume} target="_blank" rel="noreferrer">
                <Flex
                  m="25px auto"
                  style={hamStyle}
                  onClick={onClose}
                  _hover={{
                    backgroundColor: "#b7ced8",
                    boxShadow: "0 1px 1px 1px black",
                  }}
                >
                  <CgFileDocument size={20} />
                  <Text fontSize={"18px"}>RESUME</Text>
                </Flex>
              </a>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
};

export default Navbar;
