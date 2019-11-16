import { range } from 'lodash';
import { getBoardDom, getTotalScoreDom, isGameOver } from '../../src/boardDom';
import { getBoard } from '../../src/board';

describe('Board DOM', () => {
  it('should return a dom element of board with 8 X 8 matrix', () => {
    const board = getBoard();
    const boardDom = getBoardDom(board);

    document.body.appendChild(boardDom);

    expect(document.getElementsByClassName('board')).toHaveLength(1);
    expect(document.getElementsByClassName('row')).toHaveLength(8);
    expect(document.getElementsByClassName('col')).toHaveLength(64);

    expect(
      document.getElementsByClassName('row')[1].getAttribute('data-index')
    ).toBe('1');

    expect(
      document.getElementsByClassName('col')[8].getAttribute('data-row-index')
    ).toBe('1');
    expect(
      document.getElementsByClassName('col')[8].getAttribute('data-col-index')
    ).toBe('0');
  });

  it('should return as Game over if 8 coins are opened on the board', () => {
    document.body.innerHTML = range(0, 8)
      .map(() => '<div class="coin">')
      .join('');
    expect(isGameOver()).toBe(true);
  });

  it('should the game if lesser than 8 coins are opened on the board', () => {
    document.body.innerHTML = range(0, 7)
      .map(() => '<div class="coin">')
      .join('');
    expect(isGameOver()).toBe(false);
  });

  it('should return total score DOM', () => {
    const score = 5;
    document.body.appendChild(getTotalScoreDom(score));
    const scoreContainer = document.getElementsByClassName(
      'nes-container is-rounded is-dark is-centered'
    )[0];

    expect(scoreContainer.textContent).toEqual(
      `Game over!!!Your total score is ${score}. Please reload the page to start a new game`
    );
  });
});
