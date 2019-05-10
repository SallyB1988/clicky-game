import React from "react";
import { Card, Image } from "react-bootstrap";
import "./style.css";

// PlayerCard renders an image
function PlayerCard(props) {
  const handleClick = () => {
    props.playerClicked(props.name);
    props.updateCount();
  };

  return (
    <Card bg="info" style={{ width: '10rem', margin: '5px auto' }} onClick={handleClick}>
      <Card.Body>
        <Image className="card-img" src={props.image} />
      </Card.Body>
    </Card>
  );
}

export default PlayerCard;
