import React, { Component } from 'react';

import Board from '../../components/Board';
import NextPlayer from '../../components/NextPlayer';
import History from '../../components/History';

import './styles.css';

class Game extends Component {
  state = {
    squares: Array(9).fill(null),
    xIsNext: true
  };

  handleClick = i => {
    const { squares, xIsNext } = this.state;

    if (squares[i] !== null) return;
    else squares[i] = xIsNext ? 'X' : 'O';

    this.setState({
      squares,
      xIsNext: !this.state.xIsNext
    });
  };

  render() {
    const { xIsNext, squares } = this.state;

    return (
      <div className="game__container">
        <Board squares={squares} onClick={this.handleClick} />
        <div className="info__container">
          <p className="game__title">Tic-Tac Toe</p>
          <NextPlayer xIsNext={xIsNext} />
          <History />
        </div>
      </div>
    );
  }
}

export default Game;
