const sumAll = function(start, end) {
    // check if an integer
    if (!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR";
    // check if positive integer
    if (start < 0 || end < 0) return "ERROR";
    // if start is larger than end, flip them
    if (start > end) {
        const temp = start;
        start = end;
        end = temp;
    } 
    // add them
    let sum = 0
    for (let i = start; i < end + 1; i++) {
        sum += i;
    }   
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
