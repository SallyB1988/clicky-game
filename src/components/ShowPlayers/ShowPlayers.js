import React, { Fragment } from "react";
import PlayerCard from "../PlayerCard";

// ShowPlayers renders a region for displaying cards for game
function ShowPlayers(props) {
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
