import React, { Component } from 'react';

import Board from '../../components/Board';
import NextPlayer from '../../components/NextPlayer';
import History from '../../components/History';

import { Container, Info, Title, TitlePhone } from './styles';

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
      xIsNext: !xIsNext
    });
  };

  componentWillUpdate() {}

  handleStartClick = () => {
    const { isGameOn } = this.state;

    this.setState({ isGameOn: !isGameOn });
  };

  render() {
    const { xIsNext, squares } = this.state;

    return (
      <Container>
        <TitlePhone>Tic-Tac Toe</TitlePhone>
        <Board squares={squares} onClick={this.handleClick} />
        <Info>
          <Title>Tic-Tac Toe</Title>
          <NextPlayer xIsNext={xIsNext} />
          <History />
        </Info>
      </Container>
    );
  }
}

export default Game;
