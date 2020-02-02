import "./index.scss";
import React, { FC, PropsWithChildren } from "react";
import { Card, Button } from "react-bootstrap";

export interface GameCardProps {
  id: string;
  src: string;
  alt?: string;
  height?: number;
  width?: number;
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
        src="/assets/images/finalfantasy14.jpg"        
      />
      <div className="card-banner">{props.children}</div>
      <Card.Body>
        <Card.Text>
          Doluptassimus aut hicient rerios ipsus arum ra ditatur? Tiam qui dolut
          que ma dolut il ipsaecu ptatur?
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default GameCard;
