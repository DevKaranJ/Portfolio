import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiHeroku,
  SiNetlify,
} from "react-icons/si";
import { FaGit, FaGithub } from "react-icons/fa";
import {
  BsTablet,
  BsCodeSlash,
  BsGraphUp,
  BsArrowRepeat,
  BsTools,
} from "react-icons/bs"; // Add icons for Mobile/Responsive Development, RSpec, TDD, and Chrome Dev Tools

function Toolstack() {
  const toolStackStyle = {
    fontSize: "14px",
    textAlign: "center",
    marginTop: "5px",
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <div style={toolStackStyle}>Visual Studio Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <div style={toolStackStyle}>Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <div style={toolStackStyle}>Slack</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <div style={toolStackStyle}>Vercel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGit />
        <div style={toolStackStyle}>Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
        <div style={toolStackStyle}>GitHub</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
        <div style={toolStackStyle}>Heroku</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <div style={toolStackStyle}>Netlify</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsTablet />
        <div style={toolStackStyle}>Responsive Dev</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsCodeSlash />
        <div style={toolStackStyle}>RSpec</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsGraphUp />
        <div style={toolStackStyle}>TDD</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsArrowRepeat />
        <div style={toolStackStyle}>Chrome Dev Tools</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
