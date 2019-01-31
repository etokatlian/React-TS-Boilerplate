import React from 'react';

export interface IProps {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

// helpers

// declare function getExclamationMarks(numChars: number): string;

const getExclamationMarks: (numChars: number) => string = numChars => {
  return Array(numChars + 1).join('!');
};

const RandomPage: React.FC<IProps> = ({
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
