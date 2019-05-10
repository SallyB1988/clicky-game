import React from 'react';
import { Container, Jumbotron, Image} from 'react-bootstrap';
import players from './data/players.json';
import GameBoard from './components/GameBoard';
import "./App.css";


function App() {
return( 
  <Container>
    <Jumbotron className="jumbotron my-0" fluid>
      <Image fluid src="/images/MarioCardsHeader.png"></Image>
    </Jumbotron>
    <GameBoard className="gameboard" players={players} />
  </Container>
)
}

export default App;