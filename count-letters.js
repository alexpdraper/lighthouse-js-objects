console.log(countLetters(process.argv[2]));

function countLetters (word) {
  word = word.toLowerCase().replace(/\s+/g, '').split('');
  var letterCount = {};
  word.map(function (letter) {
    letterCount.hasOwnProperty(letter) ? letterCount[letter]++ : letterCount[letter] = 1;
  });
  return letterCount;
}