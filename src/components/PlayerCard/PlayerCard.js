import React from "react";
import "./style.css";

// PlayerCard renders an image
function PlayerCard(props) {

const  handleClick = () => {
    props.playerClicked(props.name);
    props.updateCount();
  }

    return (
      <div className="card w-25 wrapper" onClick={handleClick}>
        <img className="card-img" alt={props.name} src={props.image} />
        <div><h2>{props.temp ? "true" : "false"}</h2></div>
      </div>
    )
}

export default PlayerCard;