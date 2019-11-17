import { getAllByRole, fireEvent, getByText } from '@testing-library/dom';
import '../../src/';

describe('Diamond sweeper - End to End', () => {
  it('should play the game', () => {
    const audioMock = jest.fn();
    window.HTMLMediaElement.prototype.play = audioMock;

    const container = document.createElement('div');
    container.setAttribute('id', 'root');

    global.startApp(document.body);

    const tiles = getAllByRole(document.body, 'button');
    tiles.forEach(tile => {
      fireEvent.click(tile);
    });

    // 8 coins + 1 game over
    expect(audioMock.mock.calls.length).toBe(9);

    getByText(document.body, 'Game over!!!');
  });
});
