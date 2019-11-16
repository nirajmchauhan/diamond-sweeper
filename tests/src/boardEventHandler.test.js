import { checkForCoin } from '../../src/boardEventHandler';

describe('Board event handler', () => {
  let getAttributeMock;
  let setAttributeMock;
  let target;

  beforeEach(() => {
    getAttributeMock = jest.fn();
    setAttributeMock = jest.fn();
    target = {
      getAttribute: getAttributeMock,
      setAttribute: setAttributeMock,
    };
    getAttributeMock.mockReturnValueOnce(0).mockReturnValueOnce(0);
  });

  it('should add coin class if tile has coin', () => {
    const board = [[{ hasCoin: true }]];
    checkForCoin(target, board);

    expect(getAttributeMock.mock.calls).toEqual([
      ['data-row-index'],
      ['data-col-index'],
    ]);

    expect(setAttributeMock.mock.calls).toEqual([['class', 'col coin']]);
  });

  it('should add no-coin class if tile does not has coin', () => {
    const board = [[{ hasCoin: false }]];
    checkForCoin(target, board);

    expect(getAttributeMock.mock.calls).toEqual([
      ['data-row-index'],
      ['data-col-index'],
    ]);

    expect(setAttributeMock.mock.calls).toEqual([['class', 'col no-coin']]);
  });
});
