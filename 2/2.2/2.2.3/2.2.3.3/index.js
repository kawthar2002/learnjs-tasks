grid.addEventListener('click', (event) => {
  if (event.target.tagName !== 'TH') return;

  const tableBody = grid.querySelector('tbody');
  const rows = Array.from(tableBody.rows);
  const col = event.target.cellIndex;

  rows.sort((rowA, rowB) => {
    const cellA = rowA.cells[col].textContent;
    const cellB = rowB.cells[col].textContent;

    if (+cellA) return cellA - cellB;
    else return cellA.localeCompare(cellB, ['ru', 'en']);
  });

  tableBody.append(...rows);
});
