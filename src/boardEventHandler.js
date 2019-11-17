import { concat, get, toNumber } from 'lodash';

const coinAudio = new Audio(
  'https://themushroomkingdom.net/sounds/wav/smw/smw_coin.wav'
);

const getNearestLocationByLevel = (rowIndex, colIndex, level) => {
  return [
    {
      path: [rowIndex, colIndex + level],
      direction: 'right',
    },
    {
      path: [rowIndex, colIndex - level],
      direction: 'left',
    },
    {
      path: [rowIndex - level, colIndex],
      direction: 'top',
    },
    {
      path: [rowIndex + level, colIndex],
      direction: 'bottom',
    },
    {
      path: [rowIndex - level, colIndex + level],
      direction: 'top-right',
    },
    {
      path: [rowIndex - level, colIndex - level],
      direction: 'top-left',
    },
    {
      path: [rowIndex + level, colIndex + level],
      direction: 'bottom-right',
    },
    {
      path: [rowIndex + level, colIndex - level],
      direction: 'bottom-left',
    },
  ];
};

const getNearestCoinDirection = (board, rowIndex, colIndex) => {
  const nearestPaths = concat(
    getNearestLocationByLevel(rowIndex, colIndex, 1),
    getNearestLocationByLevel(rowIndex, colIndex, 2),
    getNearestLocationByLevel(rowIndex, colIndex, 3),
    getNearestLocationByLevel(rowIndex, colIndex, 4)
  );
  return nearestPaths.find(location => {
    const tile = get(board, location.path, {});
    return !tile.isRevealed && tile.hasCoin;
  });
};

const removeAllArrows = () => {
  document.querySelectorAll('.no-coin').forEach(tile => {
    tile.setAttribute('class', 'col no-coin');
  });
};

export const checkForCoin = (target, board) => {
  const rowIndex = toNumber(target.getAttribute('data-row-index'));
  const colIndex = toNumber(target.getAttribute('data-col-index'));
  removeAllArrows();

  if (board[rowIndex][colIndex].hasCoin) {
    target.setAttribute('class', 'col coin');
    board[rowIndex][colIndex].isRevealed = true;
    coinAudio.play();
  } else {
    const location = getNearestCoinDirection(board, rowIndex, colIndex);
    const classes = ['col no-coin'];
    if (location) {
      classes.push(`arrow ${location.direction}`);
    }
    target.setAttribute('class', classes.join(' '));
  }
};
