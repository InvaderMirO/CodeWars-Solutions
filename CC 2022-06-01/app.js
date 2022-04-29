// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

//loop i initially attempted didn't work as i didn't create a variable for the return outside of the loop... dummy. see fix below in refactors.

// take in params for number of repetitions and string.
// return repeat function on string 
function repeatStr (n, s) {
    return s.repeat(n)
}

// solution successful
