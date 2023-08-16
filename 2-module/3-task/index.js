let calculator = {
  read(a, b) {
    if(typeof(a)==='number' && !isNaN(a) && isFinite(a)) calculator.a = a;
    else throw 'Переменные должны быть конечными ЧИСЛАМИ!';
    if(typeof(b)==='number' && !isNaN(b) && isFinite(b)) calculator.b = b;
    else throw 'Переменные должны быть конечными ЧИСЛАМИ!';
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
