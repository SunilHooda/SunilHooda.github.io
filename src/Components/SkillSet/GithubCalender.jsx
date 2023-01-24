import React from "react";
import GitHubCalendar from "react-github-calendar";
//import ReactTooltip from "react-tooltip";

const Calender = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginTop: "20px" }}
    >
      <div>
        <GitHubCalendar
          style={{ margin: "auto" }}
          username="SunilHooda"
          fontSize={20}
        />
      </div>
      <div style={{ margin: "auto" }}>
        <a href="https://github.com/SunilHooda">
          <img
            style={{ height: "100%", width: "100%" }}
            align="left"
            src="https://github-readme-streak-stats.herokuapp.com/?user=SunilHooda"
            alt="streak"
          />
        </a>
      </div>
    </div>
  );
};

export default Calender;
