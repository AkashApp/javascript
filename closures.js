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

// ------------------------------------------------------------------------------------

// setTimeout Output

function a(){
    for(var i=0; i<3; i++){
        setTimeout(function log(){
            console.log(i);
        }, i * 1000);
    }
}
a(); // 3 3 3

// using let instead of var
function a(){
    for(let i=0; i<3; i++){
        setTimeout(function log(){
            console.log(i);
        }, i * 1000);
    }
}
a(); // 0 1 2 


// using closure and var
function a(){
    for(var i=0; i<3; i++){
        function inner(i){
            setTimeout(function log(){
                console.log(i);
            }, i * 1000);
        }
    }
    inner(i)
}
a(); // 0 1 2 

// ------------------------------------------------------------------------------------


