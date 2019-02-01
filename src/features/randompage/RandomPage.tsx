import React from 'react';

// How do we reuse interface from container here?
// import { Props } from './RandomPageContainer';

// helpers

const getExclamationMarks: (numChars: number) => string = numChars => {
  return Array(numChars + 1).join('!');
};

const RandomPage: React.FC<Props> = ({
  name,
  enthusiasmLevel = 1,
  onIncrement,
  onDecrement,
}) => {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div>
      <div>RandomPage {name + getExclamationMarks(enthusiasmLevel)}</div>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
};

export default RandomPage;
