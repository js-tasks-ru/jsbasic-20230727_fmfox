function makeDiagonalRed(table) {
  for(let i = 0; i < table.rows.length ; i++) {
    if(table.rows[i].cells.length !== table.rows.length) throw new Error(`табличка ваша не квадратная — нет у неё диагонали`);
  }
  for(let i = 0; i < table.rows.length ; i++) table.rows[i].cells[i].style.backgroundColor = 'red';
}
