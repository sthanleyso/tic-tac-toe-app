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

  handleClick = () => {
    this.setState({
      xIsNext: !this.state.xIsNext
    });
  };

  render() {
    const { xIsNext, squares } = this.state;
    // const value = xIsNext ? 'X' : 'O';

    return (
      <div className="game-container">
        <Board squares={squares} onClick={this.handleClick} />
        <div className="info-container">
          <p className="game-title">Tic-Tac Toe</p>
          <NextPlayer xIsNext={xIsNext} />
          <History />
        </div>
      </div>
    );
  }
}

export default Game;
