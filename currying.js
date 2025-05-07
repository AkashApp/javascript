// currying
// currying is a technique in javascript where a function is returned from another function
// currying is a function which takes one argument at a time and returns a new function
//  expecting the next argument
// it is a conversion of functions from callable as this f(a,b)
//  to callable as that f(a)(b)
// curried functions are constructed by chaining closures by immediately
//  returning there inner functions symmetrically

// ------------------------------------------------------------------------------------

// example
// normal function
function add(a, b) {
    return a+b;
}
add(2,3);
// curried function
function curriedAdd(a) {
    return function(b) {
        return a+b;
    }
}
curriedAdd(2)(3);

// ------------------------------------------------------------------------------------

// why should we use currying 
// to avoid passing same arguments over and over again, to create higher order functions,
//  to make your function pure and less prone to errors and to make your code more readable

// ------------------------------------------------------------------------------------

// sum(2)(6)(8);

function sum(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
};
sum(2)(6)(8);

// ------------------------------------------------------------------------------------

// evaluate("sum")(4)(2)
// evaluate("multiply")(4)(2)
// evaluate("subtract")(4)(2)
// evaluate("divide")(4)(2)

function evaluate(operation){
    return function(a){
        return function(b){
            if(operation === 'sum') return a+b;
            else if(operation === 'multiply') return a*b;
            else if(operation === 'subtract') return a-b;
            else if(operation === 'divide') return a/b;
            else return null;
        }
    }
}
evaluate("sum")(4)(2);
evaluate("multiply")(4)(2);
evaluate("subtract")(4)(2);
evaluate("divide")(4)(2);

// ------------------------------------------------------------------------------------

// Infinite currying sum(1)(2)(3)....(n)

function adding(a){
    return function(b){
        if(b) return adding(a+b);
        return a;
    }
}
console.log("addition ",adding(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)());