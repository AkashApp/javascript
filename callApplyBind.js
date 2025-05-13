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

// ------------------------------------------------------------------------------------

// polyfill for call

let car1 = {
    color: "Red",
    company: "Ferrari"
};

function purchaseCar(currency, price) {
    console.log(`I bought ${this.color} ${this.company} for ${currency} ${price}`);
};

Function.prototype.myCall = function(context = {}, ...args) {
    if(typeof this !== "function") return console.log("Not a function");
    context.fn = this;
    context.fn(...args);
};

purchaseCar.myCall(car1, "USD", 100000);

// ------------------------------------------------------------------------------------

// polyfill for apply

Function.prototype.myApply = function(context = {}, args = []) {
    if(typeof this !== "function") throw new Error("Not a function");

    if(Array.isArray(args)){
        throw new Error("Second argument must be an array");
    }
    context.fn = this;
    context.fn(...args);
};

purchaseCar.myApply(car1, ["USD", 100000]);

// ------------------------------------------------------------------------------------

// polyfill for bind

Function.prototype.myBind = function(context = {}, ...args) {
    if(typeof this !== "function") return console.log("Not a function");
    context.fn = this;
    return function(...nextArgs) {
        return context.fn(...args, ...nextArgs);
    };
};

const newFunc = purchaseCar.myBind(car1, "USD", 100000);
console.log(newFunc());

// ------------------------------------------------------------------------------------

// what will be output

function abc() {
    console.log(this.name);
}

const obj1 = {
    name: "Akash",
};

abc.call(obj1);
abc.apply(obj1);
abc.bind(obj1)();

// output
// Akash
// Akash
// Akash

// ------------------------------------------------------------------------------------

