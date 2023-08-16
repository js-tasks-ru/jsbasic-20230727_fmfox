let calculator = {
  read(a, b) {
    if(typeof(a)==='number' && !isNaN(a) && isFinite(a)) calculator.a = a;
    else return console.log('Переменные должны быть конечными числами!');
    if(typeof(b)==='number' && !isNaN(b) && isFinite(b)) calculator.b = b;
    else return console.log('Переменные должны быть конечными числами!');
  },
  sum() {
    return calculator.a + calculator.b;
  },
  mul() {
    return calculator.a * calculator.b;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
