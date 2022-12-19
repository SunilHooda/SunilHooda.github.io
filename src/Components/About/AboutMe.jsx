import React from "react";
import "./about.css";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import pdf from "../assets/Resume.pdf";

export default function AboutMe() {
  return (
    <div id="about">
      <div className="projects-sections"></div>
      <h2 className="pageHeadingA">
        About <strong style={{ color: "#7e80e6" }}> ME </strong>
      </h2>
      <div className="containerDiv">
        <div className="aboutmeTextDiv">
          <p className="aboutme">
            <b>
              Hello Everyone I'm,
              <p
                style={{
                  color: "#2F4F4F",
                  fontSize: "24px",
                  marginLeft: "-2px",
                }}
              >
                SUNIL HOODA
              </p>
            </b>
            <p>
              Full Stack Web Developer skilled in MERN stack who focuses on
              writing clean, elegant and efficient code.
              <br />
              I'm a passionate learner who's always willing to learn and work
              across technologies and domains. I love to explore new
              technologies and leverage them to solve real-life problems
            </p>
          </p>

          <br />
          <br />

          <p style={{ fontSize: "20px", color: "#008008" }}>
            Feel Free To Connect
          </p>
          <p style={{ color: "#5b84b1ff", fontSize: "18px" }}>
            <span style={{ fontWeight: "bold", color: "black" }}>
              Mobile :{" "}
            </span>
            7988064014
          </p>

          <div className="colzs">
            <div className="colz-icons">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/sunilhooda/"
              >
                <FaLinkedin className="social-media-icon" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: "10px" }}
                href="https://github.com/SunilHooda"
              >
                <FaGithubSquare className="social-media-icon" />
              </a>
              <a
                href="mailto:sunilhooda698@gmail.com"
                target="_blank"
                rel="noreferrer"
                style={{ marginLeft: "10px" }}
              >
                <GrMail className="social-media-icon" />
              </a>
            </div>
          </div>

          <div className="aboutBtnDiv">
            <a href={pdf} target="_blank" rel="noreferrer">
              <button className="getBtn">Get Resume</button>
            </a>
          </div>
        </div>
      </div>
      <br />
      <hr style={{ marginTop: "100px" }} />
    </div>
  );
}
