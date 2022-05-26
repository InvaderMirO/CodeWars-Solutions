// We need a function that can transform a number into a string.

// What ways of achieving this do you know?

// Examples:
// 123 --> "123"
// 999 --> "999"

// return num argument as a string by enclosing in string method
function numberToString(num) {
    return String(num)
}

// refactor 1
function numberToString(num) {
    return ''+num;
}

// refactor 2
function numberToString(num) {
    return num.toString();
}