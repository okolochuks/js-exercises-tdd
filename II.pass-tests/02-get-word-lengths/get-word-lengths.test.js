var wordLengths = require("./get-word-lengths");

test("Get word lengths", function() {
  var words = ["sun", "potato", "roundabout", "pizza"];

  var result = wordLengths(words);
  expect(result).toEqual(wordLengths(words));
});
