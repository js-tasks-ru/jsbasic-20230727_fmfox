function checkSpam(str) {
  if(typeof(str)==='string') {
    var spamWords = ['1xBet', 'XXX', 'viagra', 'porn', 'scam'];
    function spamOrNot(word) {
      return str.toLowerCase().includes(word.toLowerCase());
    }
    return spamWords.some(spamOrNot);
  } else console.log('функция «checkSpam» работает только со строками');
}
