import "./index.scss";
import React, { FC, PropsWithChildren } from "react";
import { Card } from "react-bootstrap";

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
    <Card id="card" className="shadow" key={`image-${props.id}`}>
      <Card.Img variant="top" src={props.src} />
      <div className="card-banner">{props.children}</div>
      <Card.Body>
        <Card.Text className="text-center">{props.description}</Card.Text>
        <a className="btn btn-primary" href={props.href} target="_blank" rel="noopener noreferrer">Check It Out!</a>
      </Card.Body>
    </Card>
  );
};

export default GameCard;
