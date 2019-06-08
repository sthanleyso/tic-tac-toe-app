import React, { Component } from 'react';

import Square from '../Square';

import { Container } from './styles';

class Board extends Component {
  render() {
    const [...squares] = this.props.squares;

    return (
      <Container>
        {squares.map((square, index) => {
          return (
            <Square
              key={index}
              value={square}
              onClick={() => this.props.onClick(index)}
            />
          );
        })}
      </Container>
    );
  }
}

export default Board;
