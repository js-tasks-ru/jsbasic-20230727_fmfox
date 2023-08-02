function print(text) {
  console.log(text);
}

function isValid(name) {
  if(name && typeof(name) === 'string' && name !== '' && /^\S*$/.test(name) && name.length > 3) {
    return 1;
  } else return 0;
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}

sayHello();
