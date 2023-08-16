let calculator = {
  read(a, b) {
    if( typeof(a)==='number' && !isNaN(a) && isFinite(a) ) calculator.a = a;
    else throw new Error ('Переменные должны быть конечными ЧИСЛАМИ!');
    if( typeof(b)==='number' && !isNaN(b) && isFinite(b) ) calculator.b = b;
    else throw new Error ('Переменные должны быть конечными ЧИСЛАМИ!');
  },
  sum() {
    if(calculator.a === undefined || calculator.b === undefined) {
      throw new Error ('Сперва нужно передать в функцию 2 числа: read(x, y)');
    } else return calculator.a + calculator.b;
  },
  mul() {
    if(calculator.a === undefined || calculator.b === undefined) {
      throw new Error ('Сперва нужно передать в функцию 2 числа: read(x, y)');
    } else return calculator.a * calculator.b;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
