import Layout from "components/Layout";
import GameCard from "components/GameCard";
import { Container, Row, Col } from "react-bootstrap";
import React from "react";

const Games = () => {
  return (
    <Layout>
      <Container>
        <h1>Games We Play</h1>
        <Row>
          <Col md={3} className="pt-3">
            <GameCard
              id="finalfantasy14"
              src="/assets/images/finalfantasy14.png"
              description="Final Fantasy XIV is a massively multiplayer online role-playing game (MMORPG) developed and published by Square Enix"
              href="https://www.finalfantasyxiv.com/"
            />
          </Col>
          <Col md={3} className="pt-3">
            <GameCard
              id="callofduty"
              src="/assets/images/callofduty.jpg"
              description="Call of Duty: Modern Warfare is a first-person shooter video game developed by Infinity Ward and published by Activision."
              href="https://www.callofduty.com/modernwarfare"
            />
          </Col>
          <Col md={3} className="pt-3">
            <GameCard
              id="rainbowsixsiege"
              src="/assets/images/rainbowsixsiege.png"
              description="Tom Clancy's Rainbow Six Siege is a first-person shooter game, in which players utilize many different operators from the Rainbow team."
              href="https://www.ubisoft.com/en-us/game/rainbow-six/siege/"
            />
          </Col>
          <Col md={3} className="pt-3">
            <GameCard
              id="rocketleague"
              src="/assets/images/rocketleague.png"
              description="Rocket League is a vehicular soccer video game developed and published by Psyonix."
              href="https://www.rocketleague.com/"
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Games;
