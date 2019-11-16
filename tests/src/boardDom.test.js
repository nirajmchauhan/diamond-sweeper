import { getBoardDom } from '../../src/boardDom';
import { getBoard } from '../../src/board';

describe('Board DOM', () => {
  it('should return a dom element of board with 8 X 8 matrix', () => {
    const board = getBoard();
    const boardDom = getBoardDom(board);

    document.body.appendChild(boardDom);

    expect(document.getElementsByClassName('board')).toHaveLength(1);
    expect(document.getElementsByClassName('row')).toHaveLength(8);
    expect(document.getElementsByClassName('col')).toHaveLength(64);

    expect(document.getElementsByClassName('row')[1].getAttribute("data-index")).toBe("1");

    expect(document.getElementsByClassName('col')[8].getAttribute("data-row-index")).toBe("1");
    expect(document.getElementsByClassName('col')[8].getAttribute("data-col-index")).toBe("0");
  });

});
