import React, { Fragment } from "react";
import PlayerCard from "../PlayerCard";
// import GameOver from "../GameOver";
import "./style.css";

// ShowPlayers renders a region for displaying cards for game
function ShowPlayers(props) {
  console.log('inside shwoplayers');
  console.log(props.players);
  return (
    <Fragment>
      { props.players.map( (p) => {
        return (
          <PlayerCard
            key={p.name}
            name={p.name}
            image={p.image}
            playerClicked={props.playerClicked}
            updateCount={props.updateCount}
            gameLost={props.gameLost}
            temp={p.clicked}
          />
        );
      })
      }
  </Fragment>
  );

}

export default ShowPlayers;
