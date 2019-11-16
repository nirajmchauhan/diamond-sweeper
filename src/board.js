import { range, chunk, sampleSize, includes } from 'lodash';

export const getBoard = () => {
  const emptyBoard = range(0, 64);
  const coins = sampleSize(emptyBoard, 8);
  const board = emptyBoard.map(i => {
    return {
      hasCoin: includes(coins, i),
    };
  });
  return chunk(board, 8);
};
