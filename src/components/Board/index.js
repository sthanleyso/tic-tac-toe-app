import React from 'react';
import Square from '../Square';

import './styles.css';

const Board = () => {
  function renderSquare() {
    const squares = [];

    for (let i = 0; i < 9; i++) {
      squares.push(<Square key={i} />);
    }

    return squares;
  }

  return (
    <div className="board-container">
      {renderSquare()}
    </div>
  );
};

export default Board;
