// Debugging
// HOF: High ordered function -> parent)

// First Class Objects (treating function like a value)
const a = 10;
const arr = [10, 20, 30];

const add = function () {};

// Immutibility in strings
// strings have position/index
let str = "hello";
str[0] = "t";
console.log(str);

// Declarative and Imperative code
// declarative code -> using inbuilt function
let nums = [10, 2, 3, 100];
// nums.map();
// nums.sort();

// Imperative code -> not using inbuilt function
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

// sort an array
// for loops, if else

// Impure  function
var x = 20;
function multiply(a, b) {
  console.log(a * b + x);
}

multiply(10, 20);
multiply(100, 2);

// Pure function
function divide(a, b) {
  console.log(a / b);
}

divide(100, 2);
divide(5, 5);
divide(100, 2);

// callback functions
function solve(x, y, callback)  {
    console.log(x + y);
    console.log(callback);
}

solve(10, 20, function () {
    
}); 