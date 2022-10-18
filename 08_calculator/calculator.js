const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
  return array.reduce((previous, current) => previous + current, 0);
};

const multiply = function(array) {
  // if array.length > 0, return the items multiplied, else return 0
  return array.length ? array.reduce((accumulator, nextItem) => accumulator * nextItem): 0;
};

const power = function(x, y) {
	return x**y;
};

const factorial = function(x) {
	//If less than 0, reject
  if (x < 0) {
    return -1;
  } else if (x === 0) { // If x = 0, return 1
    return 1;
  } else {    // call the recursive function
    return (x * factorial(x-1));
  }
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
