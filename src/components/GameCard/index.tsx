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

/**
 * Responsive image that keeps aspect ratio. Provide a height and width to override aspect ratio. Default ratio is 1:1.
 * @param props
 */
const GameCard: FC<GameCardProps> = (
  props: PropsWithChildren<GameCardProps>
) => {
  return (
    <Link to={props.href}>
      <Card id="card" className="shadow" key={`image-${props.id}`}>
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
