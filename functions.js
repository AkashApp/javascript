// Functions
// function is a block of code that can be reused

// what is function declaration
// function declaration is a way to define a function in javascript

// what is function expression
// when you store a function inside a variable it is called function expression

// what are first class functions?
//  first class functions are functions that can be assigned to a variable
//  first class functions are functions that can be passed as arguments to other functions

// what is IIFE?
// IIFE is immediately invoked function expression


// ------------------------------------------------------------------------------------

//  params and arguments
function square(num){ //params
    return num*num;
}
square(5); //arguments

// ------------------------------------------------------------------------------------

//  rest operator

function multiply(a,b,...rest){
    console.log(a,b,rest);
}
multiply(1,2,3,4,5);

// ------------------------------------------------------------------------------------

//  callback function
//  A callback function is a function passed into another function as an argument,
// which is then invoked inside the outer function to complete some kind of routine or action.
//  setTimeout, map, filter, reduce are the example of the callback function

//  ------------------------------------------------------------------------------------

// Arrow function
//  Arrow function is a shorter syntax for creating functions
//  this keyword is not available in arrow function because arrow function does not have its own this keyword
// some advantages of arrow function is that they are more concise and easier to read and also they
// are more memory efficient in terms of memory usage and performance because they do not have
// their own this keyword. some more things about arrow function is that they are not hoisted.
// arguments keyword is not available. 

//  ------------------------------------------------------------------------------------

//  higher order function
//  A higher-order function is a function that either takes other functions as arguments or returns a function as a result
