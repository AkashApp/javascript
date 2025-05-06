// var is existed from the start of the javascript
// where let and const is introduced in ES6 version of javascript

// Scope
// var vs let vs const
// var is function scoped
// let and const are block scoped

// ------------------------------------------------------------------------------------
// variable shadowing
// var a = 1;
// let a = 2;
// console.log(a);

// let a = 1;
// let a = 2;
// console.log(a);

// var a = 1;
// const a = 2;
// console.log(a);

// var a = 1;
// var a = 2;
// console.log(a);

// const a = 1;
// const a = 2;
// console.log(a);

// ------------------------------------------------------------------------------------

// Unligal shadowing
// const a = 1;
// var a = 2;
// console.log(a);

// const a = 1;
// let a = 2;
// console.log(a);

// var a = 1;
// let a = 2;
// console.log(a);

// ------------------------------------------------------------------------------------

//  Declaration
// var can be redeclared in the same scope
// let cannot be redeclared in the same scope
// const cannot be redeclared in the same scope

// Declaration without initialization
// var can be declared without initialization of any value
// let can be declared without initialization of any value
// const cannot be declared without initialization of any value

// ------------------------------------------------------------------------------------

// Re-initialization
// var can be reinitialized
// let can be reinitialized
// const cannot be reinitialized

// ------------------------------------------------------------------------------------

// Hoisting
// during the creation fase javscript moves your variables and function declarations to the top
// of the code block which known as the hoisting
// var can be hoisted
// let and const cannot be hoisted
// let is hoisted in temporal dead zone
// temporal dead zone is where the variable is declared but not initialized
// temporal dead zone is the time between creation fase and execution fase
// const cannot be hoisted
// const is hoisted in temporal dead zone

// ------------------------------------------------------------------------------------

// example

function abc() {
    console.log(a,b,c);

    var a = 1;
    let b = 2;
    const c = 3;
}
abc();
// here the var is hoisted so it is undefined
// the let and const are not hoisted
// the let and const are in temporal dead zone so value is 
// not initialized yet, it will give Uncaught ReferenceError

// ------------------------------------------------------------------------------------
