import React from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="row">
        <div className="profile-container col-md-12" id="home">
          {/* Navbar */}
          <div
            className="row"
            style={{
              border: "1px solid red",
              width: "100%",
            }}
          >
            <div
              className="col-md-12"
              style={{ margin: "0px", padding: "0px" }}
            >
              <Navbar expand="lg" className="myNav" fixed="top">
                <Container fluid>
                  <Navbar.Brand href="#home">
                    <div className="logo">
                      <p>
                        <span className="code">&#x0003C;</span>
                        <span className="first">S</span>
                        <span className="last">unil</span>
                        <span className="first"> H</span>
                        <span className="last">ooda</span>
                        <span className="code">&#x0002F;&#x0003E;</span>
                      </p>
                    </div>
                  </Navbar.Brand>
                  <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    style={{ background: "whitesmoke" }}
                  />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-5 mx-auto  my-md-0 mr-md-3">
                      <Nav.Link href="#home">
                        <p className="menu-content">HOME</p>
                      </Nav.Link>
                      <Nav.Link href="#about">
                        <p className="menu-content">ABOUT ME</p>
                      </Nav.Link>
                      <Nav.Link href="#resume">
                        <p className="menu-content">SKILLS</p>
                      </Nav.Link>
                      <Nav.Link href="#project">
                        <p className="menu-content">PROJECTS</p>
                      </Nav.Link>
                      <Nav.Link href="#contact">
                        <p className="menu-content">CONTACT</p>
                      </Nav.Link>
                      <Nav.Link href="#home">
                        <p className="menu-content">RESUME</p>
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
          </div>

          {/* HomePage */}
          <div className="row p-5">
            <div className="profile-parent col-md-12 mt-0 mb-5 p-5">
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
                  </div>
                </div>

                <div className="profile-details-name">
                  <span className="primary-text"></span> Hello, I'm
                  <span className="highlighted-text"> Sunil Hooda</span>
                </div>

                <div className="profile-details-role">
                  <span className="primary">
                    <div align="center">
                      <img
                        src="https://readme-typing-svg.herokuapp.com/?lines=Full+Stack+Web+Developer;MERN+Stack+Developer;Web+Developer;React+Developer;Quick+learner&color=red&center=true"
                        alt="Full Stack Developer"
                        height={80}
                      />
                    </div>

                    <span className="profile-role-tagline">
                      It's Nice To Meet You. Hope You Enjoy Your Stay.
                    </span>
                  </span>
                </div>
                <div className="profile-option">
                  <a
                    href="./Sunil Hooda Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
