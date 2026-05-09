// var -> global, local scope

//  let: declare a variable for a block scope.
// 1. block scoped variable
var x = 10;

// if, for, while
{
  // var x = 20;
  let x = 20;
  x = 100;
  console.log(x); //
}

console.log(x); //

// 2. re-declaration is not allowed
let z = 20;
// let z = 100;//give error
console.log(z);

// 3. hoisting doesn't works (temporal dead zone)
a = 50;
console.log(a);
// let a;//give error

// const: is used to declare a block scoped variable with constant reference.
// 1. block scoped variable
var y = 40;
{
  const y = 50;
  // y = 100;//re-assign a value (give error)
  console.log(y);
}
console.log(y);

const arr = [10, 2, 3, 100];
arr[0] = 200;
// arr = [10, 2, 3, 20];//give error
console.log(arr); //

// 2. re-declaration is not allowed
const i = 10;
// const i = 100;//give error
console.log(i);

// 3. hoisting doesn't works (temporal dead zone)
b = 50;
console.log(b);
// const b;//give error

// arrow function/fat arrow (=>) : is used to created a function with simple syntax
// 1. syntax
function add() {
  console.log(this); //window
  return "hello";
}

console.log(add());

addVal = () => {
  //   console.log(this); //window
  return "hello";
};

// same as
// addVal = () => "hello";

console.log(addVal());

// function expression
// const fun = () => {
// }

// 2. return (syntax)

// 3. this keyword (in arrow function, this keyword always refers to window)
let person = {
  detail: function () {
    console.log(this); //person
  },
  deatils: () => {
    console.log(this); //window
  },
};

person.detail();
person.deatils();

// closures function
let count = 0;

function inc() {
  count += 1;
  console.log(count);
}

inc(); //1
inc(); //2
inc(); //3

// here, problem is anyone can change count variable.
function increment() {
  let count = 0;
  count += 1;
  console.log(count);
}

increment(); //1
increment(); //1
increment(); //1

// using closure function
// main/parent -> incrementCount
function incrementCount() {
  let count = 0; //lexical scope

  return () => {
    count += 1;
    console.log(count);
  };
}

let closureFun = incrementCount();
console.log(closureFun);
closureFun();
closureFun();
closureFun();
closureFun();

// Application of closure
entertainment = () => {
  let userAccessType = "Guest";

  subscription = (type) => {
    userAccessType = type;
    console.log(userAccessType);
  };

  return subscription;
};

let sub = entertainment();
console.log("payment confimation");
sub("Premium");

// Task: create a main function, based on a condition return either of 1 function from main function
