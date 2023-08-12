function ucFirst(str) {
  if(typeof(str)==='string') {
    if(str=='') return str;
    let str_tmp = '';
    for(i = 1 ; i < str.length ; i++) str_tmp += str[i];
    return str[0].toUpperCase() + str_tmp;
  } else console.log('на вход подана НЕ строка');
}
