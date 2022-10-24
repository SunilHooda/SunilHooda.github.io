import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { FaGithubSquare, FaLink } from "react-icons/fa";
import { Projectdata } from "./ProjectData";
import ProjectCards from "./ProjectCard";
import "./Project.css";

export const Project = () => {
  return (
    <Container fluid>
      <div id="project" className="projects-sections"></div>
      <Container>
        <h1 className="project-heading">
          My Recent <strong style={{ color: "#7e80e6" }}>Works </strong>
        </h1>
        <p style={{ color: "#7e80e6", fontSize: "17px", fontWeight: "500px" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {Projectdata.map((item) => (
            <Col md={4} className="project-card" key={item.id}>
              <ProjectCards props={item} />
            </Col>
          ))}
        </Row>
      </Container>

      <hr style={{ marginTop: "100px" }} />
    </Container>
  );
};
