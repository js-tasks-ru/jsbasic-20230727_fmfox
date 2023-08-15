function sumSalary(obj) {
  let sumzp = 0;
  let i = 0;
  for (key in obj) {
    let val = obj[key];
    if(typeof(val) === 'number' && !isNaN(val) && isFinite(val)) sumzp += val;
    else i++;
  }
  if(Object.keys(obj).length === 0) console.log('Пустой объект');
  else if(sumzp == 0 && i > 0) console.log('В объекте не найдено зарплат (св-в с конечными числовыми значениями)');
  else if(sumzp > 0 && 'currency' in obj) console.log(`Сумма всех зарплат: ${sumzp} ${obj['currency']}`);
  else console.log(`Сумма всех зарплат: ${sumzp}`);
  return sumzp;
}
