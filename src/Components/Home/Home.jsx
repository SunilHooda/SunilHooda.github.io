import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import { GrMail } from "react-icons/gr";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlinePhone,
  AiOutlineRocket,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import "./Home.css";
import pdf from "../assets/Resume.pdf";

export default function Home() {
  const [expand, updateExpanded] = useState(false);

  return (
    <>
      <div className="row">
        <div className="profile-container col-md-12" id="home">
          {/* Navbar */}
          <div className="row">
            <div
              className="col-md-12"
              style={{ margin: "0px", padding: "0px" }}
            >
              <Navbar
                expanded={expand}
                expand="lg"
                className="myNav"
                fixed="top"
              >
                <Container fluid>
                  <Navbar.Brand href="#home">
                    <div className="logo">
                      <p>
                        <span className="first">S</span>
                        <span className="last">unil</span>
                        <span className="first"> H</span>
                        <span className="last">ooda</span>
                      </p>
                    </div>
                  </Navbar.Brand>
                  <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    style={{ background: "whitesmoke" }}
                    onClick={() => {
                      updateExpanded(expand ? false : "expanded");
                    }}
                  />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-2 mx-auto  my-md-0 mr-md-3">
                      <Nav.Link
                        href="#home"
                        onClick={() => updateExpanded(false)}
                      >
                        <p className="menu-content">
                          <AiOutlineHome style={{ marginBottom: "2px" }} /> HOME
                        </p>
                      </Nav.Link>

                      <Nav.Link
                        href="#about"
                        onClick={() => updateExpanded(false)}
                      >
                        <p className="menu-content">
                          <AiOutlineUser style={{ marginBottom: "2px" }} />{" "}
                          ABOUT ME
                        </p>
                      </Nav.Link>

                      <Nav.Link
                        href="#skills"
                        onClick={() => updateExpanded(false)}
                      >
                        <p className="menu-content">
                          <AiOutlineRocket style={{ marginBottom: "2px" }} />
                          SKILLS
                        </p>
                      </Nav.Link>

                      <Nav.Link
                        href="#project"
                        onClick={() => updateExpanded(false)}
                      >
                        <p className="menu-content">
                          <AiOutlineFundProjectionScreen
                            style={{ marginBottom: "2px" }}
                          />
                          PROJECTS
                        </p>
                      </Nav.Link>

                      <Nav.Link
                        href="#contact"
                        onClick={() => updateExpanded(false)}
                      >
                        <p className="menu-content">
                          <AiOutlinePhone style={{ marginBottom: "2px" }} />
                          CONTACT
                        </p>
                      </Nav.Link>

                      <Nav.Link
                        href={pdf}
                        target="_blank"
                        onClick={() => updateExpanded(false)}
                      >
                        <p className="menu-content">
                          <CgFileDocument style={{ marginBottom: "2px" }} />
                          RESUME
                        </p>
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
          </div>

          {/* HomePage */}
          <div
            className="row p-5"
            style={{
              marginTop: "120px",
            }}
          >
            <div
              className="profile-parent col-md-12 mt-0 mb-5 p-5"
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="profile-details">
                <div className="colz">
                  <div className="colz-icon">
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
                      href="https://github.com/SunilHooda"
                    >
                      <FaGithubSquare className="social-media-icon" />
                    </a>
                    <a
                      href="mailto:sunilhooda698@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GrMail className="social-media-icon" />
                    </a>
                  </div>
                </div>

                <div className="profile-details-name">
                  <span className="primary-text"></span> Hello, I'm
                  <span className="highlighted-text"> Sunil Hooda</span>
                </div>

                <div className="profile-details-role">
                  <span className="primary">
                    <h1>
                      <Typewriter
                        className="typicalText"
                        options={{
                          strings: [
                            "MERN STACK",
                            "WEB DEVELOPER",
                            "LOVE TO CODE ❤️",
                          ],
                          autoStart: true,
                          loop: true,
                          deleteSpeed: 50,
                        }}
                      />
                    </h1>

                    <span className="profile-role-tagline">
                      It's nice to meet you. Hope you enjoy your stay.
                    </span>
                  </span>
                </div>

                <div className="profile-option">
                  <a href={pdf} target="_blank" rel="noreferrer">
                    <button className="getResumeBtn">Get Resume</button>
                  </a>
                </div>
              </div>
              <div className="profile-picture">
                <div className="profile-picture-background">
                  <img
                    src="https://avatars.githubusercontent.com/u/105985748?v=4"
                    alt="profile"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}
