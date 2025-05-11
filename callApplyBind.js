// call

var obj = {name:"akash", age:20};

function sayHello(age, proffesion) {
    return "Hello " + this.name + " your age is " + age + " and he is " + proffesion;
};
console.log(sayHello.call(obj,25, "Softerware Engineer"));

// apply
console.log(sayHello.apply(obj,[25, "Softerware Engineer"]));
