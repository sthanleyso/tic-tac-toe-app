import React from 'react';

import './styles.css';

const History = () => {
  return (
    <>
      <ol className="history-moves">
        <li><button>Go to game start</button></li>
        <li><button>Go to move #1</button></li>
        <li><button>Go to move #2</button></li>
        <li><button>Go to move #3</button></li>
      </ol>
    </>
  );
};

export default History;
