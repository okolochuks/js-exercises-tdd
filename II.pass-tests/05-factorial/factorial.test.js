var factorial = require("./factorial");

describe("Factorial", function() {
  test("Factorial", function() {
    var in1 = 5;
    var result1 = 120;

    var in2 = 9;
    var result2 = 362880;

    var in3 = 1;
    var result3 = 1;

    var in4 = 0;
    var result4 = 1;

    var in5 = 3;
    var result5 = 6;

    var result1 = factorial(in1);
    var result2 = factorial(in2);
    var result3 = factorial(in3);
    var result4 = factorial(in4);
    var result5 = factorial(in5);

    expect(result1).toEqual(factorial(in1));
    expect(result2).toEqual(factorial(in2));
    expect(result3).toEqual(factorial(in3));
    expect(result4).toEqual(factorial(in4));
    expect(result5).toEqual(factorial(in5));
  });
});
