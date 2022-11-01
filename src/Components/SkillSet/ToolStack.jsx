import React from "react";
import { Col, Row } from "react-bootstrap";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div className="skillCard">
          <p style={{ fontWeight: "bolder" }}>VS Code</p>
          <img
            style={{ marginTop: "-10px", width: "90%" }}
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"
            }
            alt=""
          />
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="skillCard">
          <p style={{ fontWeight: "bolder" }}>Github</p>
          <img
            style={{ marginTop: "-10px", width: "90%" }}
            src={"https://cdn-icons-png.flaticon.com/512/25/25231.png"}
            alt=""
          />
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="skillCard">
          <p style={{ fontWeight: "bolder" }}>Netlify</p>
          <img
            style={{ marginTop: "-10px", width: "90%" }}
            src={"https://cdn.cdnlogo.com/logos/n/75/netlify.svg"}
            alt=""
          />
        </div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <div className="skillCard">
          <p style={{ fontWeight: "bolder" }}>Postman</p>
          <img
            style={{ marginTop: "-10px", width: "90%" }}
            src={
              "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png"
            }
            alt=""
          />
        </div>
      </Col>
    </Row>
  );
}

export default Toolstack;
