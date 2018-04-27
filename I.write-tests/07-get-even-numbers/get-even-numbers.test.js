var getEvenNumbers = require("./get-even-numbers");
test("get even numbers", function() {
  // Arrange
  var arr = [22, 13, 73, 82, 4];
  // Act
  var result = arr % 2 === 0;
  // Assert
  expect(result).toEqual(arr % 2 === 0);
});

// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
