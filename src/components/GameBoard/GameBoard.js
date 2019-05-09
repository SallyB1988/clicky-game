import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import { Row, Col, Container } from "react-bootstrap";
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
      topScore: 0,
      modalOpen: false,
      modalContent: ''
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

  // Game Lost:
  //    Set gameOver to true;
  //    Set gameWon to false;
  //    If game is lost, check if score is higher than previous highscore. If so, update it.
  gameLost = () => {
    let highScore =
      this.state.numClicked > this.state.topScore
        ? this.state.numClicked
        : this.state.topScore;
    let message = <h3 className="text-center">{this.state.gameWon ? "You Won!" : "You Lost!"}</h3>;
    this.setState({ gameOver: true, gameWon: false, topScore: highScore, modalOpen: true, modalContent: message });
  };

  handleClickCount = () => {
    this.checkGameOver();
    const newPlayersArray = this.shuffleCards();
    this.setState({
      numClicked: this.state.numClicked + 1,
      players: newPlayersArray
    });
  };

  handlePlayerClicked = name => {
    let playersCopy = this.state.players;

    let newPlayers = playersCopy.map(p => {
      if (p.name === name) {
        if (p.clicked) {
          this.gameLost();
        }
        p.clicked = true;
      }
      return p;
    });
    this.setState({ players: newPlayers });
  };

  handleModalClose = () => {
    let playersCopy = this.state.players;

    for (let i = 0; i < playersCopy.length; i++) {
      playersCopy[i].clicked = false;
    }

    this.setState({
      modalOpen: false,
      gameOver: false,
      numClicked: 0,
      players: playersCopy
    });
  };

  render() {
    return (
      <Container >
        <Row className="game-container">
          <Col md="2" />
          <Col md="4">
            <h3 className="text-center">Clicks: {this.state.numClicked} </h3>
          </Col>
          <Col md="4" justifyContentCentered>
            <h3 className="text-center">Top Score: {this.state.topScore} </h3>
          </Col>
        </Row>
        <Col md="8" mx="auto" className="game-board">
          <ShowPlayers
            players={this.state.players}
            playerClicked={this.handlePlayerClicked}
            updateCount={this.handleClickCount}
            gameLost={this.gameLost}
          />
        </Col>

        <Modal
          centered
          show={this.state.modalOpen}
          onHide={this.handleModalClose}
        >
          <Modal.Header className="modal-header" closeButton>
            <Modal.Title centered>Game Over</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.modalContent}
 
          </Modal.Body>
        </Modal>
      </Container>
    );
  }
}

export default GameBoard;
