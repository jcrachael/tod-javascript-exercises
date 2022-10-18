const findTheOldest = function(arrayOfPeople) {
    // loop through the array of objects
    for (let i = 0; i < arrayOfPeople.length; i++) {
        let currentPerson = arrayOfPeople[i];
        // if no year of death, subtract the person's birth year from today's date
        if (Object.hasOwn(currentPerson, 'yearOfDeath') === false) {
            let date = new Date();
            let year = date.getFullYear();
            let age = year - currentPerson['yearOfBirth'];
            currentPerson.age = age;
        // otherwise, subtract the person's birth year from their death year
        } else {
            let deathYear = currentPerson['yearOfDeath']; 
            let birthYear = currentPerson['yearOfBirth'];
            let age = deathYear - birthYear;
            currentPerson.age = age;
        };                     
    };
    // sort by age in descending order and return index 0
    let newArray = arrayOfPeople.sort((a, b) => {return a.age - b.age;});
        let sortedArray = newArray.reverse();
        return sortedArray[0];
}; 
    
// Do not edit below this line
module.exports = findTheOldest;
