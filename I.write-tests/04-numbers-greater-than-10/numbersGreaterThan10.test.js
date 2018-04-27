var largerThanTen = require("./numbersGreaterThan10");

test("Get numbers greater than 10", function() {
  // Arrange
  var array = [4, 10, 32, 9, 21];
  // Act
  var result = array > 10;
  // Assert
  expect(result).toEqual(array > 10);
});

// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];
