import React, { useState } from "react";
import Square from "./Square";
import "./tictac.css";
const TicTac2 = () => {
  const [valArr, setValArr] = useState(Array(9).fill(null));
  const [isTurnX, setTurnX] = useState(true);
  //winning logic
  const checkWinner = (valArr) => {
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningConditions.length; i++) {
      const [a, b, c] = winningConditions[i];
      if (
        valArr[a] === valArr[b] &&
        valArr[a] === valArr[c] &&
        valArr[a] !== null
      ) {
        return valArr[a];
      }
    }
    return null;
  };
  const isWinner = checkWinner(valArr);
  const changeTurn = (index) => {
    if (checkWinner(valArr) || valArr[index]) {
      return;
    }
    valArr[index] = isTurnX ? "X" : "O";
    setValArr(valArr);
    setTurnX(!isTurnX);
  };
  let playerstatus;
  if (!isWinner) {
    playerstatus = `Player ${isTurnX ? "X" : "O"} turn`;
  }
  return (
    <>
      <h2>Tic Tac Toe</h2>
      {isWinner ? (
        <h3>Player {isWinner} is Winner</h3>
      ) : (
        <div className="main-Container">
          <div className="board-row">
            <Square value={valArr[0]} changeTurn={() => changeTurn(0)} />
            <Square value={valArr[1]} changeTurn={() => changeTurn(1)} />
            <Square value={valArr[2]} changeTurn={() => changeTurn(2)} />
          </div>
          <div className="board-row">
            <Square value={valArr[3]} changeTurn={() => changeTurn(3)} />
            <Square value={valArr[4]} changeTurn={() => changeTurn(4)} />
            <Square value={valArr[5]} changeTurn={() => changeTurn(5)} />
          </div>
          <div className="board-row">
            <Square value={valArr[6]} changeTurn={() => changeTurn(6)} />
            <Square value={valArr[7]} changeTurn={() => changeTurn(7)} />
            <Square value={valArr[8]} changeTurn={() => changeTurn(8)} />
          </div>
          <button
            className="btn retry"
            style={{ color: "#fff" }}
            onClick={() => setValArr(Array(9).fill(null))}
          >
            Retry
          </button>
        </div>
      )}
      {isWinner ? (
        <button
          className="btn retry"
          style={{ color: "#fff" }}
          onClick={() => setValArr(Array(9).fill(null))}
        >
          Retry
        </button>
      ) : (
        <h3>{playerstatus}</h3>
      )}
    </>
  );
};

export default TicTac2;
