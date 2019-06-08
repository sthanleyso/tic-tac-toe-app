import React from 'react';

// import './styles.css';

const StartGame = (props) => {
  return (
    <>
      <button type="button" onClick={props.handleStartClick}>START GAME</button>
    </>
  );
};

export default StartGame;
