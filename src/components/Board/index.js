import React from 'react';
import Square from '../Square';

const Board = () => {
  function renderSquare() {
    const squares = [];

    for (let i = 0; i <= 9; i++) {
      squares.push(<Square />);
    }

    return squares;
  }

  return (
    <>
      <p>Next Player: X</p>
      <>
        {renderSquare()}
      </>
    </>
  );
};

export default Board;
