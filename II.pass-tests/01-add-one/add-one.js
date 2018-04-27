module.exports = function(numbers) {
  numbers.forEach(function(number) {
    numbers = number + 1;
  });
  return numbers;
};
