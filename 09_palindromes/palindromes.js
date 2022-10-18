const palindromes = function (input) {
    // lowercase string and use regex to remove non-chars
    let re = /[\W_]/g;
    let lowCaseReg = input.toLowerCase().replace(re, '');
    // take a string and convert it to an array
    let reversed = lowCaseReg.split('').reverse().join('');
    // check if true and return 
    return reversed === lowCaseReg;
};

// Do not edit below this line
module.exports = palindromes;
