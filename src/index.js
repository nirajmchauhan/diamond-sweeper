import './index.scss';
import { getBoard } from './board';
import { getBoardDom, getTotalScoreDom, isGameOver } from './boardDom';
import { checkForCoin } from './boardEventHandler';

global.startApp = container => {
  // Create a matrices array of size 8 X 8
  const board = getBoard();
  // Create html structure for the matrix
  const boardDom = getBoardDom(board);

  // Add matrix board to the dom
  container.appendChild(boardDom);

  const clickHandler = ({ target }) => {
    checkForCoin(target, board);
    target.removeEventListener('click', clickHandler);

    if (isGameOver()) {
      const totalScore = document.querySelectorAll('.question-block').length;
      document.getElementsByClassName('board')[0].remove();

      const totalScoreDom = getTotalScoreDom(totalScore);
      container.appendChild(totalScoreDom);

      const gameOverAudio = new Audio(
        'https://themushroomkingdom.net/sounds/wav/smw/smw_lost_a_life.wav'
      );
      gameOverAudio.play();
    }
  };

  document.querySelectorAll('.question-block').forEach(tile => {
    tile.addEventListener('click', clickHandler);
  });
};
