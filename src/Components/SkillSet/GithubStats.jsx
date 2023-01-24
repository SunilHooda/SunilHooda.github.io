import { Flex, Image } from "@chakra-ui/react";
import React from "react";

const GithubStats = () => {
  return (
    <Flex
      gap={"10px"}
      direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
    >
      <a
        href="https://github.com/SunilHooda"
        target={"_blank"}
        rel="noreferrer"
      >
        <Image
          style={{ height: "100%", width: "100%" }}
          align="center"
          src="https://github-readme-stats.vercel.app/api?username=SunilHooda&count_private=true&show_icons=true" //stats
          alt="stats"
        />
      </a>
      <a
        href="https://github.com/SunilHooda"
        target={"_blank"}
        rel="noreferrer"
      >
        <Image
          width={{ base: "80%", sm: "80%", md: "100%", lg: "100%" }}
          height={{ base: "70%", sm: "70%", md: "100%", lg: "100%" }}
          margin={"auto"}
          align="center"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=SunilHooda" //launguages
          alt="languages"
        />
      </a>
    </Flex>
  );
};

export default GithubStats;
