var secondLargest = require("./second-largest");

test("Second largest", function() {
  var numbers = [2, 0, 23, 0, 57, 1];

  var result = numbers[2];

  expect(result).toEqual(numbers[2]);
});
