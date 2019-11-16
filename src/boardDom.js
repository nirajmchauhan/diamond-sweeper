const getRowDom = index => {
  const row = document.createElement('div');
  row.setAttribute('class', 'row');
  row.setAttribute('data-index', index);
  return row;
};

const getColDom = (rowIndex, colIndex) => {
  const col = document.createElement('div');
  col.setAttribute('class', 'col question-block');
  col.setAttribute('data-row-index', rowIndex);
  col.setAttribute('data-col-index', colIndex);
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
