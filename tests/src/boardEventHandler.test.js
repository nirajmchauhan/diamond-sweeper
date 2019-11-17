import { checkForCoin } from '../../src/boardEventHandler';

describe('Board event handler', () => {
  let getAttributeMock;
  let setAttributeMock;
  let audioMock;
  let target;

  beforeEach(() => {
    getAttributeMock = jest.fn();
    setAttributeMock = jest.fn();
    target = {
      getAttribute: getAttributeMock,
      setAttribute: setAttributeMock,
    };
    audioMock = jest.fn();
    getAttributeMock.mockReturnValueOnce(0).mockReturnValueOnce(0);
    window.HTMLMediaElement.prototype.play = audioMock;
  });

  it('should add coin class if tile has coin', () => {
    const board = [[{ hasCoin: true }]];
    checkForCoin(target, board);

    expect(getAttributeMock.mock.calls).toEqual([
      ['data-row-index'],
      ['data-col-index'],
    ]);

    expect(setAttributeMock.mock.calls).toEqual([['class', 'col coin']]);
    expect(audioMock.mock.calls.length).toBe(1);
  });

  it('should add no-coin class if tile does not has coin', () => {
    const board = [[{ hasCoin: false }]];
    checkForCoin(target, board);

    expect(getAttributeMock.mock.calls).toEqual([
      ['data-row-index'],
      ['data-col-index'],
    ]);

    expect(setAttributeMock.mock.calls).toEqual([['class', 'col no-coin']]);
    expect(audioMock.mock.calls.length).toBe(0);
  });

  it('should add arrow pointing towards nearest coin', () => {
    const board = [[{ hasCoin: false }, { hasCoin: true }]];
    checkForCoin(target, board);

    expect(getAttributeMock.mock.calls).toEqual([
      ['data-row-index'],
      ['data-col-index'],
    ]);

    expect(setAttributeMock.mock.calls).toEqual([
      ['class', 'col no-coin arrow right'],
    ]);
  });

  it('should remove all previous arrows', () => {
    document.body.innerHTML = '<div class="col no-coin arrow right"></div>';
    const board = [[{ hasCoin: false }, { hasCoin: true }]];
    checkForCoin(target, board);

    expect(getAttributeMock.mock.calls).toEqual([
      ['data-row-index'],
      ['data-col-index'],
    ]);

    expect(setAttributeMock.mock.calls).toEqual([
      ['class', 'col no-coin arrow right'],
    ]);
    expect(document.body.innerHTML).toBe('<div class="col no-coin"></div>');
  });
});
