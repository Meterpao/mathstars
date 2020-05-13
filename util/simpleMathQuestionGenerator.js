// Helper function to generate simple math questions

// returns first int, second int and the summation of the two
// first int and second int will be between 1 to 10 inclusive
module.exports.roomIdGenerator = function randomAdditionQuestion() {
  var firstNumber = Math.floor(Math.random() * 10) + 1;
  var secondNumber = Math.floor(Math.random() * 10) + 1;
  return firstNumber, secondNumber, firstNumber + secondNumber;
};

// returns first int, second int and the summation of the two
// first int and second int will be between 1 to 10 inclusive
module.exports.roomIdGenerator = function randomSubtractionQuestion() {
  var firstNumber = Math.floor(Math.random() * 10) + 1;
  var secondNumber = Math.floor(Math.random() * 10) + 1;
  return firstNumber, secondNumber, firstNumber - secondNumber;
};

// returns first int, second int and the summation of the two
// first int and second int will be between 1 to 10 inclusive
module.exports.roomIdGenerator = function randomMultiplicationQuestion() {
  var firstNumber = Math.floor(Math.random() * 10) + 1;
  var secondNumber = Math.floor(Math.random() * 10) + 1;
  return firstNumber, secondNumber, firstNumber * secondNumber;
};

// returns first int, second int and the summation of the two
// first int and second int will be between 1 to 10 inclusive
module.exports.roomIdGenerator = function randomDivisionQuestion() {
  var firstNumber = Math.floor(Math.random() * 10) + 1;
  var secondNumber = Math.floor(Math.random() * 10) + 1;
  return firstNumber * secondNumber, secondNumber, firstNumber;
};
