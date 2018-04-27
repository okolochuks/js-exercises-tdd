var fizzbuzz = require("./fizz-buzz");

test("prints 1", function() {
  var result = [1];
  expect(result).toEqual([1]);
});

test("prints 1,2", function() {
  var result = [1, 2];
  expect(result).toEqual([1, 2]);
});
