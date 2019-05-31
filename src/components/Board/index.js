import React, { Component } from 'react';

import Square from '../Square';

import './styles.css';

class Board extends Component {
  render() {
    const [ ...squares ] = this.props.squares;

    return (
      <div className="board__container">
        {squares.map((square, index) => {
          return (
            <Square
              key={index}
              value={square}
              onClick={() => this.props.onClick(index)}
            />
          );
        })}
      </div>
    );
  }
}

export default Board;
