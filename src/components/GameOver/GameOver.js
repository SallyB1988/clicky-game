import React from "react";
// import "./style.css";

// GameOver renders a region for displaying cards for game
function GameOver(props) {
  return(
  <div className="modal" id="game-over-modal" show="true" tabIndex="-1" role="dialog">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalCenterTitle">Game Over</h5>
        </div>
        <div className="modal-body">
          <h3>{props.message}</h3>
        </div>
      </div>
    </div>
  </div>
  );
}

export default GameOver