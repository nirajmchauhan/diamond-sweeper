import { flattenDeep } from 'lodash';
import { getBoard } from '../../src/board.js';

describe('Game Board', () => {
  it('should return a game board matrix of 8 X 8', () => {
    const board = getBoard();
    expect(board).toHaveLength(8);
    expect(board[0]).toHaveLength(8);
    expect(board[1]).toHaveLength(8);
    expect(board[2]).toHaveLength(8);
    expect(board[3]).toHaveLength(8);
    expect(board[4]).toHaveLength(8);
    expect(board[5]).toHaveLength(8);
    expect(board[6]).toHaveLength(8);
    expect(board[7]).toHaveLength(8);
  });
  it('should return game board with 8 coins', () => {
    const board = flattenDeep(getBoard());
    const coinTiles = board.filter(b => b.hasCoin === true);
    expect(coinTiles).toHaveLength(8);
  });
});
