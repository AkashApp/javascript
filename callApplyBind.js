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

// Find min/max number in an array
const numbers = [5, 6, 2, 3, 7];
console.log(Math.min.apply(null, numbers));
console.log(Math.max.apply(null, numbers));