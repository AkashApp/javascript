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

// private variables

function counter(){
    var count = 0;

    function add(increment){
        count += increment;
    }
    function get(){
        return count;
    }
    return {
        add,
        get
    }
}

const counter1 = counter();
counter1.add(1);
counter1.add(2);
console.log(counter1.get());

// ------------------------------------------------------------------------------------

// Module pattern

var Module = (function(){
    function privateMethod(){
        // do something
        console.log('private');
    }

    return {
        publicMethod: function(){
            // can callprivateMethod();
            console.log("public")
        }
    }
})();

Module.publicMethod(); // it will print public
Module.privateMethod(); // it will give error

// ------------------------------------------------------------------------------------

// Make this run only once

let view;
function likeTheVideo(){
    view = "liked";
    console.log("Subscribe now and ",view);
}
likeTheVideo(); // Subscribe now and liked
likeTheVideo(); // Subscribe now and liked
likeTheVideo(); // Subscribe now and liked


function likeTheVideoOnce(){
    let called = 0;

    return function () {
        if(called > 0){
            console.log("Already Subscribed and liked");
        } else {
            view = "liked";
            console.log("Subscribe now and ",view);
            called++;
        }
    };
}
let isSubscribed = likeTheVideoOnce();
isSubscribed(); // Subscribe now and liked
isSubscribed(); // Already Subscribed and liked
isSubscribed(); // Already Subscribed and liked

// ------------------------------------------------------------------------------------