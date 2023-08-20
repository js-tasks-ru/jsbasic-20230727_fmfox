function makeFriendsList(obj) {
  let tmp = [];
  let j = 0;
  obj.forEach( (i) => {
    if('firstName' in i) {
      tmp[j] = i.firstName;
      if('lastName' in i) tmp[j] += ' ' + i.lastName;
    } else if('lastName' in i) tmp[j] = i.lastName;
    else throw new Error('в объекте нет ни firstName, ни lastName');
    j++;
  });

  let ul = document.createElement('ul');
    for(let i = 0; i < tmp.length; i++) {
      let li = document.createElement('li');
      let liText = document.createTextNode(tmp[i]);	// МОЖНО ЛИ
      //li.innerText = `${tmp[i]}`;
      li.appendChild(liText);				// БЫЛО КАК-ТО
      ul.appendChild(li);				// ЭТО ПРОЩЕ СДЕЛАТЬ ?  в одну строку может...
    }
  return ul;
}
