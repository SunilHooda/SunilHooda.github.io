import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCard({ props }) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.image} alt="card-img" />
      <Card.Body>
        <Card.Title>
          <strong>{props.name}</strong>
        </Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{props.desc}</Card.Text>
        <Card.Text style={{ textAlign: "center" }}>
          Tech Stack : {props.techStack}`
        </Card.Text>
        <Button
          variant="primary"
          href={props.gitlink}
          target="_blank"
          style={{ margin: "5px" }}
        >
          <BsGithub /> &nbsp; {"Github"}
        </Button>
        <Button
          variant="primary"
          href={props.livelink}
          target="_blank"
          style={{ margin: "5px" }}
        >
          <CgWebsite /> &nbsp;
          {"Live"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCard;
