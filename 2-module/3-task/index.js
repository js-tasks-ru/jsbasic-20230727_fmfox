let calculator = {
  read(a, b) {
    if( typeof(a)==='number' && !isNaN(a) && isFinite(a) ) calculator.a = a;
    if( typeof(b)==='number' && !isNaN(b) && isFinite(b) ) calculator.b = b;
  },
  sum() {
    if('a' in calculator && 'b' in calculator) return calculator.a + calculator.b;
  },
  mul() {
    if('a' in calculator && 'b' in calculator) return calculator.a * calculator.b;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
