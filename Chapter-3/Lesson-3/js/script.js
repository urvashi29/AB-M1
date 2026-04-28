// conditional statememt (if, if else, else if, switch)
var firstName = "alina";

// syntax
// if(condtion) {
//     //block of code
// }

if (firstName == "alex") {
  console.log("correct input!");
}

// alternate syntax
// condition && code to execute
firstName == "alina" && console.log("correct input!");

if (firstName == "alina") {
  console.log("correct input!");
} else {
  console.log("incorrect input!");
}

// Ternary opeartor (?:)
// condition ? () : ()
firstName == "alina"
  ? console.log("correct input!")
  : console.log("incorrect input!");

//   else if
let lastName = "joe";
if (firstName == "alex" && lastName == "joe") {
  console.log("correct fullname");
} else if (lastName == "joe") {
  console.log("correct lastname");
} else if (firstName == "alina") {
  console.log("correct firstname");
}

// switch
var fruit = "apple";

// fruit === case value;//strict checking
switch (fruit) {
  case "banana":
    console.log("banana is selected");
    break;
  case "apple":
    console.log("apple is selected");
    break;
  case "mango":
    console.log("mango is selected");
    break;
  case "orange":
    console.log("orange is selected");
    break;
  default:
    console.log("no fruit!");
}

// switch for range
let marks = 85;
switch (true) {
  case marks >= 90:
    console.log("Grade A");
    break;
  case marks >= 85:
    console.log("Grade B");
    break;
  case marks >= 80:
    console.log("Grade C");
    break;
  default:
    console.log("Grade D");
}

// Task:
// var weekday = 0;
// 0 -> sunday
// 1 -> monday
// 2
// 3
// 4
// 5
// 6-> saturday

// nestes statements
// if() {
//     if( ) {}
// }

// max of 3 number
var x = 10;
var y = 20;
var z = 30;

var max = 0;
if (x > y) {
  max = x;
} else {
  max = y;
}

if (max > z) {
  console.log(max + " is greater!");
} else {
  console.log(z + " is greater!");
}

// Loops (for, while, do while)
// st1 -> initialisation
// st2 -> condition
// st3 -> increment/decrement

// execution
// st1 -> st2 -> boc -> st3 -> st2 -> boc -> st3 -> st2 -> boc till st2 is true

// for(st1 (optional); st2; st3(optional)) {
//     // block of code
// }

// 1 loop cycle = 1 iteration
for (var i = 0; i <= 10; i++) {
  console.log(i); //0 1 2 3 4 5 6 7 8 9 10
}

var j = 10;
for (; j > 0; ) {
  console.log(j); //10 9 8 7 6 5 4 3 2 1
  j--;
}

// iterate over arrays
var nums = [10, 20, 3, 4, 5, 6, 7];
// length -> 7
// index starts with 0

// i -> index
for (var i = 0; i < nums.length; i++) {
  console.log(nums[i]); //10 20 3 4 5 6 7
}

// while
var a = 10;
while (a > 4) {
  console.log(a); //10 9 8 7 6 5
  a--;
}

// do while
// do {
//     //block of code
// }while(condition )

var b = 10;
do {
  console.log(b); //10
  b++;
} while (b < 5);

//break: break the loop and come out of the loop

// search for an element in an array
for (var i = 0; i < nums.length; i++) {
  if (nums[i] == 5) {
    console.log(nums[i] + " exists!");
    break;
  }
  console.log(nums[i] + " all");
}

// continue :  break the current iteration
for (var i = 1; i <= 5; i++) {
  if (i == 3 || i == 4) {
    continue;
  }
  console.log(i); //1 2 5
}

console.log("end");

