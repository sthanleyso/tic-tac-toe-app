import React from 'react';

import './styles.css';

const Square = ({ onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      <span></span>
    </button>
  );
}

export default Square;
