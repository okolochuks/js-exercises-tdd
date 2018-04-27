var addOne = require("./add-one.js");

test("Add 1 to each item in myArray", function() {
  var myArray = [31, 57, 12, 5];

  var result = addOne(myArray);

  expect(result).toEqual(addOne(myArray));
});
