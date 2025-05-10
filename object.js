// Objects

// An object is a collection of properties, and property is an association between a name (or Key) and value.
// A property's value can be a function, in which case the property is called a method.

// What's JSON.stringify and JSON.parse?

const user = {
    name: "Akash",
    age: 20,
};
const strObj = JSON.stringify(user);
console.log(JSON.parse(strObj));

// ------------------------------------------------------------------------------------

// What is output

function changeAgeAndReference(person) {
    person.age = 25;
    person = {
        name: "John",
        age: 30,
    };
    return person;
};

const person1 = {
    name: "Akash",
    age: 20,
};
const person2 = changeAgeAndReference(person1);
console.log(person1);
console.log(person2);

// ------------------------------------------------------------------------------------