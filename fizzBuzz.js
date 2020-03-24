const fizzBuzz = (num) => {
  if(num%3 === 0 && num%5 === 0) {
    return "fizzbuzz";
  }
  else if (num%3 === 0) {
    return "fizz";
  } else if(num%5 === 0) {
    return "buzz";
  } else {
    return num;
  }
};

module.exports = fizzBuzz;

// Write a program that returns:
// 1. "fizz" in the case where the number passed as a parameter is a multiple of 3.
// 2. "buzz" in the case where the number passed in parameter is a multiple of 5
// 3. "fizzbuzz" in the case where the past number is a multiple of both 3 and 5
// 4. The number in the case where the latter is neither a multiple of 3 nor a multiple of 5

