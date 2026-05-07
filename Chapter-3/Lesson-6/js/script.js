// variable scoping: var vs let vs const
// arrow function

//global scope(accessibility)
var x = 10;
console.log(x);

addNumbers();

// function declaration
function addNumbers() {
  //block of code
  var sum = 0;
  sum = 10 + 20 + x;
  console.log(sum);
}

// calling the function
addNumbers();
addNumbers();

console.log(typeof addNumbers); //function

// reusability of code
// parameterised function
function multiply(a, b, c) {
  // local scope
  var result = a * b * c;

  //   return any datatype
  return result;
}

// console.log(result);//give error

// passing a function as value
var r = multiply(10, 20, 1); //arguments (any datatype we can pass)
console.log(r);
console.log(multiply(100, 5, 2));
console.log(multiply(10, 20, "abc")); //arguments (any datatype we can pass)

var person = {
  id: 1,
  firstName: "alina",
  lastName: "joe",
  contact: {
    email: "alina@gmail.com",
  },
  //   object method
  details: function () {
    console.log(this); //person
  },
};

console.log(person.id);
person.details();

//  this keyword (refer to some objects)
console.log(this); //window global

function thisKeyword() {
  console.log(this); //refers owner object of function
}

//hoisting (hoist the declaration at top of current scope)
y = 10; //intialisation
console.log(y); //use the variable
var y; //declaration

// intialisation is not hoisted
var h; //declaration
console.log(h); //undefined
h = 100; //intialisation

// ideal: var y = 10

// Function Expressions vs function declaration (covered at the top)
// addToCart();//give error

var addToCart = function (id) {
  console.log("Added to cart! " + id);
};

addToCart(10);

// self-invoking function / anonymous function / IIFE
(function (a, b) {
  console.log(a + b);
})(10, 20);

// Math Object
console.log(Math.PI);
console.log(Math.random());
console.log(Math.round(10.8));

// Task
// create parametrized method/function to multiply 3 numbers
// create parametrized method to divide 2 numbers
// write function to convert negative number to positive number (Math object)
