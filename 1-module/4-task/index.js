function checkSpam(str) {
  if(typeof(str)==='string') {
    let spamWords = ['1xBet', 'XXX', 'viagra', 'porn', 'scam']; // массив стоп-слов
    let spamOrNot = (word) => {return str.toLowerCase().includes(word.toLowerCase())};
    return spamWords.some(spamOrNot);
  } else console.log('функция «checkSpam» работает только со строками');
}
