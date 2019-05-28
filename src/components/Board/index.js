import React, { Component } from 'react';

import Square from '../Square';

import './styles.css';

class Board extends Component {
  state = {
    squares: Array(9).fill(null)
  };

  render() {
    const [ ...squares ] = this.state.squares;

    return (
      <div className="board-container">
        {squares.map((square, index) => {
          return (
            <Square
              key={index}
              onClick={this.props.onClick} 
            />
          );
        })}
      </div>
    );
  }
}

export default Board;
