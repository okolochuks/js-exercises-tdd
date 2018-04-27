var addAllnumbers = require("./add-numbers");

test("Add all numbers", function() {
  var numbers = [9, 23, 10, 3, 8];

  var result = addAllnumbers(numbers);

  expect(result).toEqual(addAllnumbers(numbers));
});
