var getWordLengths = function(someWords) {
  someWords.forEach(function(word) {
    someWords = word.length;
    return someWords;
  });
};

module.exports = getWordLengths;
