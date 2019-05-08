import React, { Component } from "react";
import PlayerCard from "../PlayerCard"
import "./style.css";

// GameBoard renders a region for displaying cards for game
class GameBoard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numClicked: 0,
      players: this.props.players
    }
  }

  // return a random index number from an array
  getRandIndex = (arr) => {
    return Math.floor(Math.random() * arr.length)
  }

  shuffleCards = () => {
    let array = this.state.players;
    const arrLength = array.length;
    let shuffled = [];
    for (let i = 0; i < arrLength; i++ ){
      let index = this.getRandIndex(array);
      shuffled.push(array[index]);
      array.splice(index,1);
    }
    return shuffled;
  }
  
    handleClickCount = () => {
      const newPlayersArray = this.shuffleCards();
      // console.log('newPlayersArray');
      // console.log(newPlayersArray);
      this.setState({
        numClicked: this.state.numClicked + 1,
        players: newPlayersArray
      })
    }
  
  render() {
    return (
      <div className="row">
        <h1>Clicked: {this.state.numClicked} </h1>
        <div className="col-md-10  mx-auto game-board">
          { this.state.players.map( (p) => { return( 
            <PlayerCard key={p.name} name={p.name} image={p.image} updateCount={this.handleClickCount}/>
          ) }) }

        </div>
      </div>
    )
  }
}

export default GameBoard;