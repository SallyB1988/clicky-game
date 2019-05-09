import React, { Component } from "react";
import PlayerCard from "../PlayerCard";
import Modal from "react-bootstrap/Modal";
import ShowPlayers from "../ShowPlayers";
import "./style.css";

// GameBoard renders a region for displaying cards for game
class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numClicked: 0,
      players: [],
      gameOver: false,
      gameWon: false,
      topScore: 0
    };
  }

  componentDidMount() {
    this.setState({ players: this.props.players });
  }

   // return a random index number from an array
  getRandIndex = arr => {
    return Math.floor(Math.random() * arr.length);
  };

  // Shuffles the players array held in state. Returns a new array with players
  // in a different order
  shuffleCards = () => {
    let array = this.state.players;
    const arrLength = array.length;
    let shuffled = [];

    for (let i = 0; i < arrLength; i++) {
      let index = this.getRandIndex(array);
      shuffled.push(array[index]);
      array.splice(index, 1);
    }
    return shuffled;
  };

  checkGameOver = () => {
    if (this.state.numClicked === this.state.players.length - 1) {
      this.setState({ gameOver: true, gameWon: true });
    }
  };

  gameLost = () => {
    let highScore =
      this.state.numClicked > this.state.topScore
        ? this.state.numClicked
        : this.state.topScore;
    this.setState({ gameOver: true, gameWon: false, topScore: highScore });
  };

  handleClickCount = () => {
    this.checkGameOver();
    const newPlayersArray = this.shuffleCards();
    this.setState({
      numClicked: this.state.numClicked + 1,
      players: newPlayersArray
    });
  };

  handlePlayerClicked = (name) => {
    let playersCopy = this.state.players;
    let newPlayers = playersCopy.map( (p) => {
      if (p.name === name ){
        if (p.clicked) {
          this.gameLost();
        }
        p.clicked = true;
      }
      return p;
    })
    this.setState({ players: newPlayers})
  }

  handleModalClose = () => {
    let playersCopy = this.state.players;
    console.log('old players');
    console.log(playersCopy);
    for (let i = 0; i < playersCopy.length; i++) {
      playersCopy[i].clicked = false;
    }
    console.log('reset players!');
    console.log(playersCopy);

    this.setState({
      gameOver: false,
      numClicked: 0,
      players: playersCopy
    });

  };

  render() {
    return (
      <div className="row">
        <div className="col-md-12 text-center">
          <h1>Current Score: {this.state.numClicked} </h1>
          <h1>Top Score: {this.state.topScore} </h1>
        </div>
        <div className="col-md-10  mx-auto game-board">
          <ShowPlayers
            players={this.state.players}
            playerClicked={this.handlePlayerClicked}
            updateCount={this.handleClickCount}
            gameLost={this.gameLost}
          />
        </div>

        <Modal show={this.state.gameOver} onHide={this.handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Game Over</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3>{this.state.gameWon ? "You Won!" : "You Lost!"}</h3>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default GameBoard;
