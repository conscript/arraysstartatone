import "./index.scss";
import React, { FC, PropsWithChildren } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

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
    <Link to={props.href} id="card">
      <Card className="shadow" key={`image-${props.id}`}>
        <Card.Img variant="top" className="image" src={props.src} />
        <div className="card-banner">{props.children}</div>
        <Card.Body>
          <Card.Text className="text-center">{props.description}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default GameCard;
