import React from "react";
import "./skillset.css";
import { Container, Row } from "react-bootstrap";
import Techstack from "./TechStack";
import Toolstack from "./ToolStack";
import Calender from "./GithubCalender";
import Stats from "./Stats";

function SkillSet() {
  return (
    <Container id="skills" fluid className="skill-section">
      <Container>
        <Row
          style={{ justifyContent: "center", margin: "-50px" }}
          id="skills"
        ></Row>
        <h1 className="project-heading skills-section">
          Professional <strong style={{ color: "#7e80e6" }}>Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong style={{ color: "#7e80e6" }}>Tools</strong> I use
        </h1>
        <Toolstack />

        <h1 className="project-heading">
          My
          <strong style={{ color: "#7e80e6" }}> GitHub Calendar</strong>
        </h1>
        <Calender />

        <h1 className="project-heading" style={{ marginTop: "40px" }}>
          My
          <strong style={{ color: "#7e80e6" }}> Statistics</strong>
        </h1>
        <Stats />
      </Container>
      <hr style={{ marginTop: "100px" }} />
    </Container>
  );
}

export default SkillSet;
