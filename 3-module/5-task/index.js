function getMinMax(str) {
  let tmp = []; // массив, в котором отделим мух от котлет
  str.split(' ').forEach( (i) => {
    if( !isNaN(i) ) {
      tmp.push( Number(i) );
    }
  });
  return {'min': Math.min(...tmp), 'max': Math.max(...tmp)};
}
