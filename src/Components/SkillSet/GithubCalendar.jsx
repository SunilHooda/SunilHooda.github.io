import { Box, Container, Flex, Image } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const Calendar = () => {
  return (
    <Flex flexDirection={"column"} gap={5}>
      <Box>
        <GitHubCalendar
          username="SunilHooda"
          fontSize={14}
          blockSize={15}
          blockMargin={3}
        />
      </Box>
      <Container
        w={{ base: "100%", sm: "100%", md: "70%", lg: "60%" }}
        justify={"center"}
        align={"center"}
      >
        <a
          href="https://github.com/SunilHooda"
          target={"_blank"}
          rel="noreferrer"
        >
          <Image
            height="100%"
            width="100%"
            align="left"
            src="https://github-readme-streak-stats.herokuapp.com/?user=SunilHooda"
            alt="streak"
          />
        </a>
      </Container>
    </Flex>
  );
};

export default Calendar;
