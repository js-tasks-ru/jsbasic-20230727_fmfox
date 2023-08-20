function showSalary(users, age) {
  let str = '';
  users.forEach((i, j) => {
    if('age' in i && 'balance' in i && 'name' in i && i.age <= age) {
      if (j > 0) str += '\n';
      str += i.name + ', ' + i.balance;
    }
  });
  return str;
};
