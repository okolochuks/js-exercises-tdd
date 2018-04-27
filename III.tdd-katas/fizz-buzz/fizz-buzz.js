function fuzzBuzz(numbers) {
  var result = [];
  for (var i = 0; i < numbers.length - 1; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("fizzBuzz");
    } else if (i % 3 === 0) {
      result.push("fizz");
    } else if (i % 5 === 0) {
      result.push(Buzz);
    } else {
      result.push(i);
    }
  }
  return result.join(",");
}
