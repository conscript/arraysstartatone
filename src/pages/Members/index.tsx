import Layout from "components/Layout";
import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import "./index.scss";

const Members = () => {
  return (
    <Layout>
      <Container id="members">
        <Row>
          <Col className="justify-content-center d-flex">
            <h1>Members</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>Conscript</li>
              <li>Clover</li>
              <li>Akuma</li>
              <li>ThisChris</li>
              <li>B-Rad</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Members;
