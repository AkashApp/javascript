// map filter reduce
// map filter and reduce are method of array to perform some tranformation or computation on array elements
// each may or may not return a new array based on the result of thefunction

// ------------------------------------------------------------------------------------

// map
//  map is used for creting a new array by existing one by applying a function to each element of the array
//  map does not change the original array
//  map returns a new array

// example
const arr = [1,2,3,4,5,6,7,8,9,10];
const arr2 = arr.map((element, index, array)=> element*2);
console.log(arr);
console.log(arr2);

// ------------------------------------------------------------------------------------

// filter
// filter takes each elements of an array and applies a condition statement to each element
// if the condition returns true then the element is included in the new array
// if the condition returns false then the element is not included in the new array
// filter does not change the original array
// filter returns a new array

// example
const arr3 = arr.filter((element, index, array)=> element%2===0);
console.log(arr);
console.log(arr3);

// ------------------------------------------------------------------------------------

// reduce
// reduce method reduces an array of values down to just one value
// reduce does not change the original array
// reduce returns a single value

// example
const arr4 = arr.reduce((accumulator, element, index, array)=> {
    return accumulator + element
},0);
console.log(arr);
console.log(arr4);

// ------------------------------------------------------------------------------------

// Polyfill for map()

// Array.map((num,i,arr)=>{})

Array.prototype.myMap = function(cb){
    let temp = [];
    for(let i=0; i<this.length; i++){
        temp.push(cb(this[i], i, this))
    }
    return temp;
}

const arr5 = arr.myMap((element, index, array)=> element*2);
console.log(arr);
console.log(arr5);

// ------------------------------------------------------------------------------------

// Polyfill for filter()

// Array.filter((num,i,arr)=>{})

Array.prototype.myfilter = function(cb){
    let temp = [];
    for(let i=0; i<this.length; i++){
        if(cb(this[i], i, this)){
            temp.push(this[i]);
        }
    } 
    return temp;
}

const arr6 = arr.myfilter((element, index, array)=> element%2===0);
console.log(arr);
console.log(arr6);

// ------------------------------------------------------------------------------------

// Polyfill for reduce()

// Array.reduce((acc,num,i,arr)=>{},initialValue)

Array.prototype.myReduce = function(cb, initialValue){
    var accumulator = initialValue;
    for(let i=0; i<this.length; i++){
        accumulator = accumulator?cb(accumulator, this[i], i, this):this[i];
    }
    return accumulator;
}

const arr7 = arr.myReduce((accumulator, element, index, array)=> {
    return accumulator + element
},0);
console.log(arr);
console.log(arr7);

// ------------------------------------------------------------------------------------