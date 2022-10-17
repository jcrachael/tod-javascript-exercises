const reverseString = function(input) {
    const myArray = input.split('');
    myArray.reverse();
    let newString = myArray.join('');
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
