// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

//P R E P
//Parameters    - What are the parameters? integers? special characters? empty array?
//Return        - What kind of return is expected? console.log? print to dom?
//Example       - Are these examples correct? create 3 tests.
//Pseudo code   - Create pseudo code for what you are about to write.


// psuedo
// make a function that takes in an array
// map through the array and multiply each element by 2 and return

function doubled(array){
    if(array === undefined || array.length === 0){  // created case to check for empty or undefined arrays
        console.log('Array is invalid')
    }
    return array.map(element=>element*2);
}

//tests
doubled([])
doubled([1,2,3])
console.log(doubled([2,3,4]),[4,6,8])