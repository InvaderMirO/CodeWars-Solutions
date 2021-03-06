// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
// [Make sure you type the exact thing I wrote or the program may not execute properly]

// use string literal in order to insert name arguement into the sentence
function greet(name){
    return `Hello, ${name} how are you doing today?`  //insert arg into string using ${}
}

// Refactor
const greet = name => `Hello, ${name} how are you doing today?`;