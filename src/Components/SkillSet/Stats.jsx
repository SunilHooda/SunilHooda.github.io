import React from "react";

const Stats = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
      }}
    >
      <a href="https://github.com/SunilHooda">
        <img
          style={{ height: "100%", width: "100%" }}
          align="center"
          src="https://github-readme-stats.vercel.app/api?username=SunilHooda&count_private=true&show_icons=true" //stats
          alt="stats"
        />
      </a>
      <a href="https://github.com/SunilHooda">
        <img
          style={{ height: "100%", width: "100%" }}
          align="center"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=SunilHooda" //launguages
          alt="languages"
        />
      </a>
    </div>
  );
};

export default Stats;
