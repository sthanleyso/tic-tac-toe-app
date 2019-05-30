import React from 'react';

import './styles.css';

const Square = (props) => {
  return (
    <button className="square" onClick={props.onClick}>
      <span>{props.value}</span>
    </button>
  );
}

export default Square;
