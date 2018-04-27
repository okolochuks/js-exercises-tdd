function addNumbers(numbers) {
  for (var i = 1; i < numbers.length - 1; i++) {
    return numbers[i + i];
  }
  return numbers[i + i];
}

module.exports = addNumbers;
