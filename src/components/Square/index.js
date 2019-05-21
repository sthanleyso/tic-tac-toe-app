import React from 'react';

import './styles.css';

const Square = () => {
  function handleClick() {
    console.log('Button clicked');
  }

  return (
    <button className="square" onClick={handleClick}>X</button>
  );
};

export default Square;
