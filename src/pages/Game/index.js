import React, { Component } from 'react';

import Board from '../../components/Board';
import NextPlayer from '../../components/NextPlayer';

import './styles.css';

class Game extends Component {
  state = {
    xIsNext: true
  };

  handleClick = () => {
    this.setState({ xIsNext: !this.state.xIsNext });
  };

  render() {
    return (
      <div className="game-container">
        <p className="game-title">Tic-Tac Toe</p>
        <NextPlayer xIsNext={this.state.xIsNext} />
        <Board onClick={this.handleClick} />
      </div>
    );
  }
}

export default Game;
