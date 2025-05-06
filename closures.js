// Closures
// A closure is a function that reffers to a variable in the outer/parent scope from its inner/child scope

// lexical scope
// A lexical scope in javascript means that a variable defined outside a function can be
// accessed inside the function 

// example
function abc() {
    var a = 1;
    function xyz() {
        console.log(a);
    }
    xyz();
}
abc();