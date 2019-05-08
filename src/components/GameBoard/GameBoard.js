import React from "react";
import PlayerCard from "../PlayerCard"
import "./style.css";

// GameBoard renders a region for displaying cards for game
class GameBoard extends React.Component {

  // const {
  //   players
  // } = this.props;

  state = {
    numClicked: 0
  }

  handleClickCount = () => {
    this.setState({ numClicked: this.state.numClicked + 1 })
  }

  render() {
    return (
      <div className="row">
        <h1>Clicked: {this.state.numClicked} </h1>
        <div className="col-md-10  mx-auto game-board">
          { this.props.players.map( (p) => { return( 
            <PlayerCard key={p.name} name={p.name} image={p.image} updateCount={this.handleClickCount}/>
          ) }) }

        </div>
      </div>
    )
  }
}

export default GameBoard;