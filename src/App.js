import { useState } from 'react';
import './App.css';
import Board from './Board';

function App() {
  return (
    <div className="App">
      {/* <h3>{player} je na redu</h3>
      <button onClick={handleReset}>Reset</button> */}
      <Board />
    </div>
  );
}

export default App;
