import './index.scss';
import { getBoard } from './board';
import { getBoardDom } from './boardDom';

global.startApp = function(container) {
  const board = getBoard();
  const boardDom = getBoardDom(board);

  container.appendChild(boardDom);
};
