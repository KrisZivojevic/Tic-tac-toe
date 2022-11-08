import { useState } from 'react';
import './Board.css'
import Square from './Square';

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for (let i = 0; i < lines.length; i++) {
    const a = lines[i][0];
    const b = lines[i][1];
    const c = lines[i][2];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

function Board(props) {
  const [squares, setSquares] = useState([null, null, null, null, null, null, null, null, null]);
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    const squaresCopy = squares.slice();
    if (calculateWinner(squaresCopy) || squaresCopy[i]) {
      return;
    }
    squaresCopy[i] = xIsNext ? "X" : "O";
    setSquares(squaresCopy);
    // setXIsNext(!xIsNext); // isto sto i ispod ali menja original direktno
    setXIsNext(prevState => !prevState);
  }

  const displaySquare = (i) => {
    return (
      <Square value={squares[i]} handleValue={() => handleClick(i)}/>
    )
  }

  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  return (
    <div>
      <h3>{status}</h3>
      <div className="board">
        <div className='board__row'>
          {displaySquare(0)}
          {displaySquare(1)}
          {displaySquare(2)}
        </div>
        <div className='board__row'>
          {displaySquare(3)}
          {displaySquare(4)}
          {displaySquare(5)}
        </div>
        <div className='board__row'>
          {displaySquare(6)}
          {displaySquare(7)}
          {displaySquare(8)}
        </div>
      </div>

    </div>
  )
}

export default Board;