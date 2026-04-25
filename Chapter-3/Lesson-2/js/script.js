// Operators
var x = 10;
var y = 20;

// Arithmetic operators
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(y % x); //remainder
console.log(y / x); //quotient
console.log(2 ** 3); //power

// icrement & decrement
x++; //x = x + 1;
y--; // y= y - 1
console.log(x, y);

// Assignment operator (=)
var z = 10;

// comparison operator (return boolean)
var a = 10;
var b = "10";

console.log(a == b); //comapre only values
console.log(a === b); //compare values & datatype (strict checking)
console.log(a != 10); //comapre only values
console.log(b !== 10); //compare values & datatype (strict checking)
console.log(a > 10);
console.log(a <= 10);

// Logical Operators (&&, ||, !)
console.log(a == b && a === b); // if all the conditions are true then it is true, otherwies false
console.log(a == b || a === b); //if either condition is true, return true otherwise false
console.log(!(a == b));

// String Operator (+)
var strOne = "hello";
var strTwo = "world";

console.log(strOne + strTwo);
console.log(strOne + 10); //hello10

console.log(strOne - strTwo); //NaN

// Operator precedence (priority of operator): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
// bracket
// / *
// + -
// L -> R

console.log(strOne + 10 + 20);
console.log(10 + 20 + strOne);
console.log(strOne + 20 - 10);
console.log("hello" / 2);

// Implicit coersion (automatic datatype conversion )
console.log("20" / 2); //
console.log(true + false > 2); //false

// Rules
// check the operator precedence
// check the type of operand
//  1. if either is string and + is present just concatenate
//  2. if it is string and + is not present, then check the type of string.
//      If it is numeric string or boolean, convert to number. If non-numeric, result is NaN

// Explicit coersion (changing datatype)
var num = 20;

// string to number
console.log(Number("welcome")); //
console.log(Number("180090"));
console.log(parseInt(10.8)); //10
console.log(parseFloat("10.90hikjo")); //10.9

//number to string
console.log(num.toString()); //"20"
console.log(num.toFixed(2)); //"20.00"

// boolean to number
console.log(Number(true)); //1
console.log(Number(false)); //0

// boolean to string
console.log(true.toString()); //"true"
console.log(false.toString());

var t = null;
var p;

console.log(t == p); //true
console.log(t === p); //false
console.log(false == null); //false
console.log(undefined == null); //true

console.log(null || 0 || 1); //1 return the first truth value
console.log(5 || null || undefined); //5

console.log(1 && 2 && null); //null return the falsy value
console.log(1 && 2 && 3); ////return the last last

// nullish operator
var m = null;
console.log(m ?? 100);

m = 200;
console.log(m ?? 100);

// optional chaining ?. operator
var user = {
  firstName: "alex",
  contact: {
    email: "admin@gmail.com",
  },
};

console.log(user.contact?.email);

// console.log(user.location.address);//error
console.log(user.location?.address);
