function highlight(table) {
  let tbody = table.getElementsByTagName('tbody')[0];
  for(let i = 0 ; i < table.rows.length - 1 ; i++) {    // цикл перебора строк (без учёта строки с заголовками)
    let tbrow = tbody.getElementsByTagName('tr')[i];    // СТРОКИ таблицы tbody (не учитывая заголовки)

    let age = tbrow.getElementsByTagName('td')[1];
    let gender = tbrow.getElementsByTagName('td')[2];
    let status = tbrow.getElementsByTagName('td')[3];

    if( gender.innerText === 'm' ) tbrow.classList.add('male');
    if( gender.innerText === 'f' ) tbrow.classList.add('female');

    if( !status.dataset.available ) tbrow.setAttribute('hidden', 'true');
    else {
      if( status.dataset.available === 'true') tbrow.classList.add('available');
      else if( status.dataset.available === 'false') tbrow.classList.add('unavailable');
      else {
        tbrow.style.color = 'red';
        console.log('Значение атрибута «data-available» может быть только булево');
        // консоль-лог вместо throw т. к. после ошибки уже ничего дальше не работает в цикле... никакие дальнейшие изменения т. е. в таблицу больше не вносятся
        // throw new Error('Значение атрибута «data-available» может быть только булево');
      }
    }

    if( age.innerText < 0 ) {
      age.style.color = 'red';
      console.log('Чё это возраст отрицательное число? Ещё не рождённый Цукерберг?');
      // консоль-лог вместо throw т. к. после ошибки уже ничего дальше не работает в цикле... никакие дальнейшие изменения т. е. в таблицу больше не вносятся
      //throw new Error('Чё это возраст отрицательное число? Ещё не рождённый Цукерберг?');
    } else if( age.innerText < 18 ) tbrow.style.textDecoration = 'line-through';
  }
}
