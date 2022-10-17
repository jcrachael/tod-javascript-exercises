const ftoc = function(temp) {
  let fahr = (temp - 32) * .5556;
  let result = Math.round(fahr * 10)/10;
  return result;
};

const ctof = function(temp) {
  let cels = (temp * 1.8) + 32;
  let result = Math.round(cels * 10)/10;
  return result;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
