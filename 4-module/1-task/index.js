function makeFriendsList(obj) {
  let tmp = [];
  let j = 0;
  friends.forEach( (i) => {
    if('firstName' in i) {
      tmp[j] = i.firstName;
      if('lastName' in i) tmp[j] += ' ' + i.lastName;
    } else if('lastName' in i) tmp[j] = i.lastName;
    else throw new Error('в объекте нет ни firstName, ни lastName');
    j++;
  });
  
  let res = document.createElement('ul');
	for(let i = 0; i < tmp.length; i++) {
      let li = document.createElement('li');	// МОЖНО ЛИ
      li.innerText = `${tmp[i]}`;		// БЫЛО КАК-ТО
      res.append(li);				// ЭТО ПРОЩЕ СДЕЛАТЬ ?  в одну строку может...
    }
  console.log(res);
  return res;
}
