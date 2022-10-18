# Exercise 12 - Find the Oldest

Given an array of objects representing people with a birth and death year, return the oldest person.

## Hints
- You should return the whole person object, but the tests mostly just check to make sure the name is correct.
- this can be done with a couple of chained array methods, or by using `reduce`.
- One of the tests checks for people with no death-date.. use JavaScript's Date function to get their age as of today.

### Pseudocode
1. A function takes an array of objects as its parameter
2. For each object in the array:
3. Check for year of death
4. If no year of death:
5. Subtract year of birth from today's date and return result (age)
6. If year of death is true:
7. Subtract year of birth from year of death and return result (age)
8. Compare each object's age
9. Return name of object with highest age
