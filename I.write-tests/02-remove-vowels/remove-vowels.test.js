var removeVowels = require("./remove-vowels");

test("remove vowels from word", function() {
  // Arrange
  var string = "samuel";

  // Act
  var result = removeVowels("samuel");

  // Assert
  expect(result).toEqual("_a_ue_");
});
