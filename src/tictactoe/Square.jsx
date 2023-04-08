import React from "react";
// onClick={() => props.click()}
const Square = ({ value, changeTurn }) => {
  return (
    <div className="board-cell" onClick={changeTurn}>
      <h3>{value}</h3>
    </div>
  );
};

export default Square;
