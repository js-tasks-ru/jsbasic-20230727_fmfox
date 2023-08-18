function filterRange(arr, a, b) {
  if( arr.constructor === Array && 
      typeof(a)==='number' && !isNaN(a) && isFinite(a) &&
      typeof(b)==='number' && !isNaN(b) && isFinite(b) ) {
          return arr.filter(item => item >= Math.min(a, b) && item <= Math.max(a, b));
  } else throw new Error('Что-то не так с аргументами, которые передаются в функцию «filterRange»');
}
