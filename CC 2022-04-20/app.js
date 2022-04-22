// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

//P R E P
//Parameters    - What are the parameters? integers? special characters? empty array?
//Return        - What kind of return is expected? console.log? print to dom?
//Example       - Are these examples correct? create 3 tests.
//Pseudo code   - Create pseudo code for what you are about to write.

//p: are you ever given an empty array or undefined? are you always given digits?
//r: whatever number is given, it is now split up into an array and the order of the numbers is reversed.
//e1: if given 9876 => [6,7,8,9]
//e2: if given 455445 => [5,4,4,5,5,4]
//e3: if given 0 => [0]

// psuedo
// make a function that takes in a number
function reverseArray(num){
    // make number a string and split that bebe then reverse it.
    let numArray = num.toString().split('').reverse()
    // make array integers again 
    return parseInt(numArray) // doesn't work
    return Number(numArray) // doesn't work
    //and return
    console.log(numArray)
}

reverseArray(9876)
console.log(reverseArray(455445),[5,4,4,5,5,4])
// cant do it this way.... need to use map...