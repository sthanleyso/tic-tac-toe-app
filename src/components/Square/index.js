import React from 'react';

import './styles.css';

const Square = (props) => {
  return (
    <button className="square__btn" onClick={props.onClick}>
      <span className="square__btn--span">{props.value}</span>
    </button>
  );
}

export default Square;
