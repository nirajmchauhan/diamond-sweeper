const getRowDom = index => {
  const row = document.createElement('div');
  row.setAttribute('class', 'row');
  row.setAttribute('data-index', index);
  return row;
};

const getColDom = (rowIndex, colIndex) => {
  const col = document.createElement('div');
  col.setAttribute('class', 'col question-block nes-pointer');
  col.setAttribute('data-row-index', rowIndex);
  col.setAttribute('data-col-index', colIndex);
  col.setAttribute('role', "button");
  return col;
};

export const getBoardDom = board => {
  const boardDom = document.createElement('div');
  boardDom.setAttribute('class', 'board');
  board.forEach((row, rowIndex) => {
    const rowDom = getRowDom(rowIndex);
    row.forEach((col, colIndex) => {
      const colDom = getColDom(rowIndex, colIndex);
      rowDom.appendChild(colDom);
    });
    boardDom.appendChild(rowDom);
  });

  return boardDom;
};

export const isGameOver = () => {
  return document.querySelectorAll('.coin').length === 8;
};

export const getTotalScoreDom = score => {
  const totalScoreDom = document.createElement('div');
  totalScoreDom.setAttribute(
    'class',
    'nes-container is-rounded is-dark is-centered'
  );

  const totalScoreMessageDom = document.createElement('p');
  totalScoreMessageDom.textContent = 'Game over!!!';

  const totalScoreSummaryDom = document.createElement('p');
  totalScoreSummaryDom.textContent = `Your total score is ${score}. Please reload the page to start a new game`;

  const trophyIcon = document.createElement('i');
  trophyIcon.setAttribute('class', 'nes-icon trophy is-large');

  totalScoreDom.appendChild(trophyIcon);

  totalScoreDom.appendChild(totalScoreMessageDom);
  totalScoreDom.appendChild(totalScoreSummaryDom);

  return totalScoreDom;
};
