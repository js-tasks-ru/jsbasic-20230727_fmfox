function truncate(str, maxlength) {
  if(typeof(str)==='string') {
    if(typeof(maxlength)==='number' && !isNaN(maxlength) && maxlength > 0 && maxlength % 1 === 0) {
       if(str.length <= maxlength) return str;
       else return str.slice(0, maxlength) + "…";
    } else console.log('второй аргумент должен быть натуральным числом');
  } else console.log('функция «truncate» работает только со строками');
}
