import { useState } from "react";

function Square({ value, onSquareClick }) {
  if (value != null) {
    return (
      <button className={value} onClick={onSquareClick}>
        
      </button>
    );
  }
  else {
    return (
      <button className="square" onClick={onSquareClick}>
        
      </button>
    );
  }
}

export default function Board() {
  // const [xIsNext, setXIsNext] = useState(true);
  const [redIsNext, setRedIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(42).fill(null));

  function handelClick(i) {
    let top = i;
    while (top >= 7) {
      top -= 7;
    }

    if (squares[top] || calculateWinner(squares)) {
      return;
    }

    while (i < 35) {
      i += 7;
    }
    while (squares[i] != null) {
      i -= 7;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = redIsNext ? "red" : "blue";
    setSquares(nextSquares);
    setRedIsNext(!redIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } 
  else {
    if (squares[0] != null 
      && squares[1] != null 
      && squares[2] != null 
      && squares[3] != null 
      && squares[4] != null 
      && squares[5] != null) {
        status = "It's a Tie! That's Crazy."
    }
    else {
      status = "Next player: " + (redIsNext ? "red" : "blue");
    }
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handelClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handelClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handelClick(2)}/>
        <Square value={squares[3]} onSquareClick={() => handelClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handelClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handelClick(5)}/>
        <Square value={squares[6]} onSquareClick={() => handelClick(6)}/>
      </div>
      <div className="board-row">
        <Square value={squares[7]} onSquareClick={() => handelClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handelClick(8)}/>
        <Square value={squares[9]} onSquareClick={() => handelClick(9)}/>
        <Square value={squares[10]} onSquareClick={() => handelClick(10)}/>
        <Square value={squares[11]} onSquareClick={() => handelClick(11)}/>
        <Square value={squares[12]} onSquareClick={() => handelClick(12)}/>
        <Square value={squares[13]} onSquareClick={() => handelClick(13)}/>
      </div>
      <div className="board-row">
        <Square value={squares[14]} onSquareClick={() => handelClick(14)}/>
        <Square value={squares[15]} onSquareClick={() => handelClick(15)}/>
        <Square value={squares[16]} onSquareClick={() => handelClick(16)}/>
        <Square value={squares[17]} onSquareClick={() => handelClick(17)}/>
        <Square value={squares[18]} onSquareClick={() => handelClick(18)}/>
        <Square value={squares[19]} onSquareClick={() => handelClick(19)}/>
        <Square value={squares[20]} onSquareClick={() => handelClick(20)}/>
      </div>
      <div className="board-row">
        <Square value={squares[21]} onSquareClick={() => handelClick(21)}/>
        <Square value={squares[22]} onSquareClick={() => handelClick(22)}/>
        <Square value={squares[23]} onSquareClick={() => handelClick(23)}/>
        <Square value={squares[24]} onSquareClick={() => handelClick(24)}/>
        <Square value={squares[25]} onSquareClick={() => handelClick(25)}/>
        <Square value={squares[26]} onSquareClick={() => handelClick(26)}/>
        <Square value={squares[27]} onSquareClick={() => handelClick(27)}/>
      </div>
      <div className="board-row">
        <Square value={squares[28]} onSquareClick={() => handelClick(28)}/>
        <Square value={squares[29]} onSquareClick={() => handelClick(29)}/>
        <Square value={squares[30]} onSquareClick={() => handelClick(30)}/>
        <Square value={squares[31]} onSquareClick={() => handelClick(31)}/>
        <Square value={squares[32]} onSquareClick={() => handelClick(32)}/>
        <Square value={squares[33]} onSquareClick={() => handelClick(33)}/>
        <Square value={squares[34]} onSquareClick={() => handelClick(34)}/>
      </div>
      <div className="board-row">
        <Square value={squares[35]} onSquareClick={() => handelClick(35)}/>
        <Square value={squares[36]} onSquareClick={() => handelClick(36)}/>
        <Square value={squares[37]} onSquareClick={() => handelClick(37)}/>
        <Square value={squares[38]} onSquareClick={() => handelClick(38)}/>
        <Square value={squares[39]} onSquareClick={() => handelClick(39)}/>
        <Square value={squares[40]} onSquareClick={() => handelClick(40)}/>
        <Square value={squares[41]} onSquareClick={() => handelClick(41)}/>
      </div>
    </>
  );
}

function calculateWinner(squares) {
  // horizontal win
  for (let row = 0; row < 6; row++) {
    let start = row * 7 + 0
    for (let i = start; i <= (start + 4); i++) {
      if (squares[i] != null && 
        squares[i] === squares[i + 1] && 
        squares[i + 1] === squares[i + 2] && 
        squares[i + 2] === squares[i + 3]) {
        return squares[i];
      }
    }
  }

  // vertical win
  for (let col = 0; col < 7; col++) {
    let start = 0 * 7 + col
    for (let i = col; i <= (col + 14); i+=7) {
      if (squares[i] != null && 
        squares[i] === squares[i + 7] && 
        squares[i + 7] === squares[i + 14] && 
        squares[i + 14] === squares[i + 21]) {
        return squares[i];
      }
    }
  }

  // right diagonal win 
  let rightStartingNumbers = [3, 4, 5, 6, 10, 11, 12, 13, 17, 18, 19, 20]
  for (let i = 0; i < rightStartingNumbers.length; i++) {
    let start = rightStartingNumbers[i];
    if (squares[start] != null && 
      squares[start] === squares[start + 6] && 
      squares[start + 6] === squares[start + 12] && 
      squares[start + 12] === squares[start + 18]) {
      return squares[start];
    }
  }

  // left diagonal win 
  let leftStartingNumbers = [0, 1, 2, 3, 7, 8, 9, 10, 14, 15, 16, 17]
  for (let i = 0; i < leftStartingNumbers.length; i++) {
    let start = leftStartingNumbers[i];
    if (squares[start] != null && 
      squares[start] === squares[start + 8] && 
      squares[start + 8] === squares[start + 16] && 
      squares[start + 16] === squares[start + 24]) {
      return squares[start];
    }
  }

  return null;
}