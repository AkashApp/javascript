// call

var obj = {name:"akash", age:20};

function sayHello(age) {
    return "Hello " + this.name + " your age is " + age;
};
console.log(sayHello.call(obj,25));