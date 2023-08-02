function print(text) {
  console.log(text);
}

function isValid(name) {
  if(typeof(name) === 'string' && /^\S*$/.test(name) && name.length > 3) return 1;
  else return 0;
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Добро пожаловать, ${userName}!`);
  } else {
    print('Имя не соответствует условиям');
  }
}

sayHello();
