import React from 'react';
import GameBoard from './components/GameBoard';
import players from './players.json';

function App() {
  return( 
    <div className="container">
      <GameBoard players={players} />
    </div>
  )
}

export default App;