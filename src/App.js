import React from 'react';
import PlayerCard from './components/PlayerCard';
import GameBoard from './components/GameBoard';
import players from './players.json';

function App() {
  return(
    <div className="container">
      <GameBoard>
        { players.map( (p) => { return( <PlayerCard key={p.name} name={p.name} image={p.image} />) }) }
      </GameBoard>
    </div>
  )
}

export default App;