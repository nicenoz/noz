import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiMongodb,
  DiMsqlServer,
  DiPostgresql,
  DiRedis,
} from "react-icons/di";
import {
  SiOracle,
  SiMysql,
  SiMariadb,
  SiElastic
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
       <Col xs={5} md={2} className="tech-icons">
        <DiRedis />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <SiMariadb />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <DiPostgresql />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <SiElastic />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <DiMsqlServer />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={5} md={2} className="tech-icons">
        <SiOracle />
      </Col>
    </Row>
  );
}

export default Techstack;
