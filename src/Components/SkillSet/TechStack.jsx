import React from "react";
import { Col, Row } from "react-bootstrap";
import htmlIcon from "../assets/htmlIcon.svg";
import cssIcon from "../assets/cssIcon.svg";
import jsIcon from "../assets/jsIcon.svg";
import reactIcon from "../assets/reactIcon.svg";
import reduxIcon from "../assets/reduxIcon.svg";
import expressIcon from "../assets/expressIcon.svg";
import nodeIcon from "../assets/nodeIcon.svg";
import mongoIcon from "../assets/mongoIcon.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div className="skillCard">
          <p style={{ fontWeight: "bolder" }}>HTML</p>
          <img style={{ marginTop: "-17px" }} src={htmlIcon} alt="" />
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="skillCard">
          <p style={{ fontWeight: "bolder" }}>CSS</p>
          <img style={{ marginTop: "-17px" }} src={cssIcon} alt="" />
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="skillCard">
          <p style={{ fontWeight: "bolder" }}>JavaScript</p>
          <img
            style={{ marginTop: "-10px", width: "90%" }}
            src={jsIcon}
            alt=""
          />
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="skillCard">
          <p style={{ fontWeight: "bolder" }}>REACT</p>
          <img
            style={{ marginTop: "-10px", width: "90%" }}
            src={reactIcon}
            alt=""
          />
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="skillCard">
          <p style={{ fontWeight: "bolder" }}>REDUX</p>
          <img
            style={{ marginTop: "-10px", width: "90%" }}
            src={reduxIcon}
            alt=""
          />
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="skillCard">
          <p style={{ fontWeight: "bolder" }}>ChakraUI</p>
          <img
            style={{ marginTop: "-10px", width: "90%" }}
            src={"https://img.stackshare.io/service/12421/rzylUjaf_400x400.jpg"}
            alt=""
          />
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="skillCard">
          <p style={{ fontWeight: "bolder" }}>NodeJs</p>
          <img style={{ marginTop: "-17px" }} src={nodeIcon} alt="" />
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="skillCard">
          <p style={{ fontWeight: "bolder" }}>ExpressJs</p>
          <img style={{ marginTop: "-17px" }} src={expressIcon} alt="" />
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="skillCard">
          <p style={{ fontWeight: "bolder" }}>MongoDB</p>
          <img style={{ marginTop: "-17px" }} src={mongoIcon} alt="" />
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="skillCard">
          <p style={{ fontWeight: "bolder" }}>Bootstrap</p>
          <img
            style={{ marginTop: "-7px", marginBottom: "7px" }}
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png"
            }
            alt=""
          />
        </div>
      </Col>
    </Row>
  );
}

export default Techstack;
