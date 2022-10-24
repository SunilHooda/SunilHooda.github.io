import React from "react";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
import laptopImg from "./about.png";
import { BsLinkedin } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { FaPhoneSquareAlt, FaGithubSquare } from "react-icons/fa";
import "./contact.css";

const Contact = () => {
  return (
    <Container className="contact-section" id="contact">
      <Row style={{ justifyContent: "center" }}>
        <Col
          md={7}
          style={{
            justifyContent: "center",
            paddingTop: "30px",
            paddingBottom: "50px",
          }}
        >
          <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            Connect with <strong style={{ color: "#7e80e6" }}>ME</strong>
          </h1>

          <Card className="quote-card-view">
            <Card.Body>
              <Row
                className="contact_icons"
                style={{ justifyContent: "center" }}
                xs={1}
                md={2}
              >
                <Col>
                  <BsLinkedin />
                  <br />
                  <a
                    href="https://www.linkedin.com/in/sunilhooda"
                    target="_blank"
                    rel="noreferrer"
                    className="contact_info"
                  >
                    Sunil Hooda
                  </a>
                </Col>
                <Col>
                  <FaGithubSquare />
                  <br />
                  <a
                    href="https://github.com/SunilHooda"
                    target="_blank"
                    rel="noreferrer"
                    className="contact_info"
                  >
                    Sunil Hooda
                  </a>
                </Col>
              </Row>
              <Row
                className="contact_icons"
                style={{ justifyContent: "center", padding: "50px" }}
                xs={1}
                s={1}
                md={2}
              >
                <Col>
                  <GrMail />
                  <br />
                  <a
                    href="mailto:sunilhooda698@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="contact_info"
                  >
                    sunilhooda698@gmail.com
                  </a>
                </Col>
                <Col>
                  <FaPhoneSquareAlt />
                  <br />
                  <a
                    href="tel:+917988064014"
                    rel="noreferrer"
                    className="contact_info"
                  >
                    +91 7988064014
                  </a>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col
          md={5}
          style={{ paddingTop: "40px", paddingBottom: "50px" }}
          className="about-img"
        >
          <img src={laptopImg} alt="about" className="img-fluid" />
        </Col>
      </Row>
      <hr />
    </Container>
  );
};

export default Contact;
