export const checkForCoin = (target, board) => {
  const rowIndex = target.getAttribute('data-row-index');
  const colIndex = target.getAttribute('data-col-index');

  if (board[rowIndex][colIndex].hasCoin) {
    target.setAttribute('class', 'col coin');
  } else {
    target.setAttribute('class', 'col no-coin');
  }
};
