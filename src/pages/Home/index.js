import React from 'react';

import Board from '../../components/Board';
import NextPlayer from '../../components/NextPlayer';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <p className="game-title">Tic-Tac Toe</p>
      <NextPlayer />
      <Board />
    </div>
  );
};

export default Home;
