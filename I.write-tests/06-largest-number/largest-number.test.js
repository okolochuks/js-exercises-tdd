var getLargestNumber = require("./largest-number");
test("Get largest number", function() {
  // Arrange
  var array = [3, 21, 88, 4, 36];
  // Act
  var result = Math.max(array);
  // Assert
  expect(result).toEqual(Math.max(array));
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
