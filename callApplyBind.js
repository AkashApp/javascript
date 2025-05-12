// call

var obj = {name:"akash", age:20};

function sayHello(age, proffesion) {
    return "Hello " + this.name + " your age is " + age + " and your proffesion is " + proffesion;
};
console.log(sayHello.call(obj,25, "Softerware Engineer"));

// apply
console.log(sayHello.apply(obj,[25, "Softerware Engineer"]));


// bind
const bindFirst = sayHello.call(obj);
console.log(bindFirst(25, "Softerware Engineer"));

// ------------------------------------------------------------------------------------

// Append an array to another array

const array = ["a", "b"];
const elements = ["c", "d"];

array.push.apply(array, elements);
console.log(array);


// ------------------------------------------------------------------------------------