// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

//loop i initially attempted didn't work as i didn't create a variable for the return outside of the loop... dummy. see fix below
function repeatStr (n, s) {
    var str="";
    for(var i=0; i < n; i++)
      str+=s;
      return str;
    }

// take in params for number of repetitions and string.
// return repeat function on string 
function repeatStr (n, s) {
    return s.repeat(n)
}

// solution successful


// refactor
repeatStr = (n, s) => s.repeat(n)