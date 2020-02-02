import Layout from "components/Layout";
import GameCard from "components/GameCard";
import { Container, Row, Col } from "react-bootstrap";
import React from "react";

const Games = () => {
  return (
    <Layout>
      <Container>
        <h1>Games We Play</h1>
        <Row className="pt-5">
          <Col md={3}>
            <GameCard
              id="finalfantasy14"
              src="/assets/images/finalfantasy14.png"
              description="MMORPG"
              href="https://www.finalfantasyxiv.com/"
            />
          </Col>
          <Col md={3}>
            <GameCard
              id="callofduty"
              src="/assets/images/callofduty.jpg"
              description="FPS"
              href="https://www.callofduty.com/modernwarfare"
            />
          </Col>
          <Col md={3}>
            <GameCard
              id="rainbowsixsiege"
              src="/assets/images/rainbowsixsiege.png"
              description="FPS"
              href="https://www.ubisoft.com/en-us/game/rainbow-six/siege/"
            />
          </Col>
          <Col md={3}>
            <GameCard
              id="rocketleague"
              src="/assets/images/rocketleague.png"
              description="Sports"
              href="https://www.rocketleague.com/"
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Games;
