function factorial(n) {
  let tmp = 1;
  if(n === +n && n % 1 === 0 && n >= 0) {
    for (i=n; i>1; i--) tmp *= i;
  } else {
    tmp = undefined;
    console.log('Функция «факториа́л» определена на множестве НЕОТРИЦАТЕЛЬНЫХ ЦЕЛЫХ чисел:\nwikipedia.org/wiki/Factorial');
  }
  return tmp;
}
