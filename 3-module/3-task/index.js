function camelize(str) {
  if(typeof(str) === 'string') {
    let strCamel = '';
    let defis = false; // «лакмусовая бумажка», что прошлым символом был дефис
    for (let i = 0 ; i < str.length; i++) {
      if(str[i] === '-') defis = true;
      else {
        if(defis === true) {
          strCamel += str[i].toUpperCase();
          defis = false;
        }
        else strCamel += str[i];
      }
    }
    return strCamel.replaceAll('-', '');
  } else throw new Error('На вход принимаются только строки!');
}

// function camelize(str) {
//   if ( typeof(str) === 'string' ) {
//     return str.split('-').map( (item, i) => {
//       if ( i > 0 ) item = item[0].toUpperCase() + item.slice(1);
//       return item;
//     }).join('');
//   } else throw new Error('«camelize» работает только со строками');
// }
