import Layout from "components/Layout";
import GameCard from "components/GameCard";
import { Container, Row, Col } from "react-bootstrap";
import React from "react";

const Games = () => {
  return (
    <Layout>
      <Container className="pt-5">
        <h1>Games</h1>
        <Row className="pt-5">
          <Col md={3}>
            <GameCard
              id="finalfantasy14"
              src="/assets/images/finalfantasy14.jpg"
              description="MMORPG"
              href="/games/finalfantasy"
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Games;
