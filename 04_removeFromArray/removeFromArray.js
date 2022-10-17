const removeFromArray = function(...args) {
   //the first argument is our array
   const array = args[0];
   //create new empty array
   const newArray = []
   //use forEach to go though the array
   array.forEach((item) => {
    if (!args.includes(item)) {
        newArray.push(item);
    }
   });
   return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
