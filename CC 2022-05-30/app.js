// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7


// take string entered as str arguement and return wraped in Number method
const stringToNumber = function(str){
    return Number(str)
}

// Refactor
var stringToNumber = function(str){
    return +str;
}

// Refactor 2
const stringToNumber = str => Number(str)