const add = function(numOne, numTwo) {
	return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
  return numOne - numTwo;
};

const sum = function(array) {
	return array.reduce( (acc, curr) => acc+curr, 0);
};

const multiply = function(array) {
  return array.reduce( (acc, curr) => acc*curr, 1);
};

const power = function(base, exp) {
  return base**exp;
};

const factorial = function(fact) {
	array = [...Array(fact).keys().map(i => i+1)];
  return multiply(array);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
