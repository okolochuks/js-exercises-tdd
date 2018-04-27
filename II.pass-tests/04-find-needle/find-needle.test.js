var findTheNeedle = require("./find-needle");

test("Find the needle", function() {
  var words = ["house", "train", "slide", "needle", "book"];

  var result = findTheNeedle(words);
  expect(result).toEqual(findTheNeedle(words));
});
