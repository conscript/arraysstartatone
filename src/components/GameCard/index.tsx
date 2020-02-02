import "./index.scss";
import React, { FC, PropsWithChildren } from "react";
import { Card, Button } from "react-bootstrap";

export interface GameCardProps {
  id: string;
  src: string;
  alt?: string;
  height?: number;
  width?: number;
  description?: string;
}

/**
 * Responsive image that keeps aspect ratio. Provide a height and width to override aspect ratio. Default ratio is 1:1.
 * @param props
 */
const GameCard: FC<GameCardProps> = (
  props: PropsWithChildren<GameCardProps>
) => {
  let ratio = 1;
  if (props.height && props.width) {
    ratio = props.height / props.width;
  }

  return (
    <Card id="card" className="shadow" key={`image-${props.id}`}>
      <Card.Img
        variant="top"
        className="image"
        src={props.src}       
      />
      <div className="card-banner">{props.children}</div>
      <Card.Body>
        <Card.Text className="text-center">
         {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default GameCard;
