// this

// this keyword gives reference to its own object or we can say the current object

// example

let user = {
    name: "akash",
    age: 27,
    getDetails(){
        console.log(this.name);
    },
};
user.getDetails(); //akash  

// Implement calc using this

const calc = {
    total: 0,
    add(a) {
        this.total += a;
        return this;
    },
    multiply(a) {
        this.total *= a;
        return this;
    },
    substract(a) {
        this.total -= a;
        return this;
    },
};

const result = calc.add(2).multiply(3).substract(1).add(10);
console.log(result.total);