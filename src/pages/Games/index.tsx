import Layout from "components/Layout";
import GameCard from "components/GameCard";
import { Container, Row, Col } from "react-bootstrap";
import React from "react";

const Games = () => {
  return (
    <Layout>
      <Container>
        <h1>Games</h1>
        <Row>
          <Col md={3}>
            <GameCard
              id="finalfantasy14"
              src="/assets/images/finalfantasy14.jpg"
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Games;
