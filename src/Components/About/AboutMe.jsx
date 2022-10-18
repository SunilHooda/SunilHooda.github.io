import React from "react";
import "./about.css";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

export default function AboutMe() {
  return (
    <div className="mainDiv" id="about">
      <h2 className="pageHeadingA">About Me</h2>
      <div className="containerDiv">
        <div className="aboutmeTextDiv">
          <p className="aboutme">
            <p>
              <b>
                Hello Everyone I'm,
                <h2 style={{ color: "#2F4F4F" }}>SUNIL HOODA</h2>
              </b>
            </p>
            <p>
              Full Stack Web Developer skilled in MERN stack who focuses on
              writing clean, elegant and efficient code.
              <br />
              I'm a passionate learner who's always willing to learn and work
              across technologies and domains. I love to explore new
              technologies and leverage them to solve real-life problems
            </p>
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
            </div>
          </div>
          <div className="aboutBtnDiv">
            <a
              href=".././Sunil Hooda Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="getBtn">Get Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
