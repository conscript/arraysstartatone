import "./index.scss";
import React, { FC, PropsWithChildren } from "react";
import { Card, Button } from "react-bootstrap";

export interface GameCardProps {
  id: string;
  src: string;
  alt?: string;
  description?: string;
  href: string;
}

const GameCard: FC<GameCardProps> = (
  props: PropsWithChildren<GameCardProps>
) => {
  return (
    <Card className="shadow" key={`image-${props.id}`}>
      <Card.Img variant="top" className="image" src={props.src} />
      <div className="card-banner">{props.children}</div>
      <Card.Body>
        <Card.Text className="text-center">{props.description}</Card.Text>
        <Button variant="primary" href={props.href}>Check It Out!</Button>
      </Card.Body>
    </Card>
  );
};

export default GameCard;
