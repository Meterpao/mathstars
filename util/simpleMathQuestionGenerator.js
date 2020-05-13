// Helper function to generate simple math questions

// returns first int, second int and the summation of the two
// first int and second int will be between 1 to 10 inclusive
function randomAdditionQuestion() {
  var firstNumber = Math.floor(Math.random() * 10) + 1;
  var secondNumber = Math.floor(Math.random() * 10) + 1;
  return [firstNumber, "+", secondNumber, firstNumber + secondNumber];
}

// returns first int, second int and the subtraction of the first - the second
// first int and second int will be between 1 to 10 inclusive
function randomSubtractionQuestion() {
  var firstNumber = Math.floor(Math.random() * 10) + 1;
  var secondNumber = Math.floor(Math.random() * 10) + 1;
  return firstNumber, "-", secondNumber, firstNumber - secondNumber;
}

// returns first int, second int and the multiplication of the two
// first int and second int will be between 1 to 10 inclusive
function randomMultiplicationQuestion() {
  var firstNumber = Math.floor(Math.random() * 10) + 1;
  var secondNumber = Math.floor(Math.random() * 10) + 1;
  return [firstNumber, "x", secondNumber, firstNumber * secondNumber];
}

// returns a * b, a, b
// first int and second int will be between 1 to 10 inclusive
function randomDivisionQuestion() {
  var firstNumber = Math.floor(Math.random() * 10) + 1;
  var secondNumber = Math.floor(Math.random() * 10) + 1;
  return [firstNumber * secondNumber, "/", secondNumber, firstNumber];
}

// returns a random math question
// inputs: includesOperator - if this is 1 then it will be included as a possible outcome
function randomSimpleQuestion(
  includeAddition = 1,
  includeSubtraction = 1,
  includeMultiplication = 1,
  includeDivision = 1
) {
  var randomQuestionInt = Math.random() * arguments.reduce((a, b) => a + b, 0);
  var runningSum = includeAddition;
  if (randomQuestionInt <= runningSum) {
    return randomAdditionQuestion();
  }
  runningSum += includeSubtraction;
  if (randomQuestionInt <= runningSum) {
    return randomSubtractionQuestion();
  }
  runningSum += includeMultiplication;
  if (randomQuestionInt <= runningSum) {
    return randomMultiplicationQuestion();
  }
  runningSum += includeDivision;
  if (randomQuestionInt <= runningSum) {
    return randomDivisionQuestion();
  }
}

module.exports.simpleMathQuestionGenerator = function getQuestions(
  includeAddition = 1,
  includeSubtraction = 1,
  includeMultiplication = 1,
  includeDivision = 1
) {
  var toReturn = [];
  for (i = 0; i < 100; i++) {
    toReturn.push(randomSimpleQuestion(arguments));
  }
  return toReturn;
};
