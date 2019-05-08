import React from "react";
import "./style.css";

// GameBoard renders a region for displaying cards for game
function GameBoard(props) {
  return (
    <div className="row">
      <div className="col-md-10  mx-auto game-board">
        {props.children}
      </div>
      <img className="card-img" alt={props.name} src={props.image} />
    </div>
  )
}

export default GameBoard;