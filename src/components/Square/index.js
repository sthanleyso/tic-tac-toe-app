import React from 'react';

import { Button } from './styles';

const Square = (props) => {
  return (
    <Button onClick={props.onClick}>
      <span>{props.value}</span>
    </Button>
  );
}

export default Square;
