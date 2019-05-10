import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Row, Col, Container } from "react-bootstrap";
import ShowPlayers from "../ShowPlayers";
import Instructions from "../Instructions";
import "./style.css";

// GameBoard renders a region for displaying cards for game
class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numClicked: 0,
      players: [],
      gameOver: false,
      topScore: 0,
      modalOpen: false,
      modalHeader: "",
      modalContent: ""
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

// Check Game Over -- state.numClicked has not been updated yet for 
//     the latest click, so if state.numClicked = #players - 1 then: 
//    Set gameOver to true;
//    Set Modal information to dipslay message stating the player won.

  checkGameOver = () => {
    if (this.state.numClicked === this.state.players.length - 1) {
      let message = <h3 className="text-center">You Won!</h3>;

      this.setState({
        gameOver: true,
        topScore: this.state.players.length,
        modalOpen: true,
        modalHeader: "GAME OVER",
        modalContent: message
      });
    }
  };

  // Game Lost:
  //    Set gameOver to true;
  //    If numclicked is higher than previous highscore, update highscore.
  gameLost = () => {
    let highScore =
      this.state.numClicked > this.state.topScore
        ? this.state.numClicked
        : this.state.topScore;
    let message = <h3 className="text-center">You Lost!</h3>;
    this.setState({
      gameOver: true,
      topScore: highScore,
      modalOpen: true,
      modalHeader: "GAME OVER",
      modalContent: message
    });
  };

  // Each time a player is clicked:
  // Check if game has been won.
  // Shuffle the player cards.
  // Increment the numClicked value.
  handleClickCount = () => {
    this.checkGameOver();
    const newPlayersArray = this.shuffleCards();
    this.setState({
      numClicked: this.state.numClicked + 1,
      players: newPlayersArray
    });
  };

  // Opens the modal and displays the game instructions
  showInstructions = () => {
    this.setState({
      modalHeader: "HOW TO PLAY",
      modalContent: <Instructions />,
      modalOpen: true
    });
  };

  // When a player card is clicked, check if its clicked value is true,
  // if yes, then the game is lost. If no, set the clicked value to false.
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

  // When modal closes, reset the clicked values of the players to be false.
  // Start a new game.
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
      <Container fluid>
        <Row className="game-container">
          <Col md="2" className="button-bar">
            <Button
              className="instructions"
              variant="warning"
              onClick={this.showInstructions}
            >
              Instructions
            </Button>
          </Col>
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
            <Modal.Title centered>{this.state.modalHeader}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.state.modalContent}</Modal.Body>
        </Modal>
      </Container>
    );
  }
}

export default GameBoard;
