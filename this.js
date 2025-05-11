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