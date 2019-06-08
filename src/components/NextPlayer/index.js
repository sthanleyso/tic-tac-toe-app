import React from 'react';

import { Text } from './styles';

const NextPlayer = props => {
  const { xIsNext } = props;

  return <Text xIsNext>Next Player: {xIsNext ? 'X' : 'O'}</Text>;
};

export default NextPlayer;
