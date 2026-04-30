// String ('' or ""): string are immutable(can't be changed)
// every string character has position/index which start from 0
var str =
  "   front-end development: html, css, js are the building blocks of front-end dev   ";

console.log(typeof str); //string
console.log(str.length);

// extraction
console.log(str.slice(2, 10)); //return string from 0th till 9th index
console.log(str.slice(50)); //return from 50th index till end

// find
console.log(str.indexOf("end")); //return the index value of the first position of specified word
console.log(str.indexOf("ending")); //return -1, if doesn't exist
console.log(str.lastIndexOf("end")); //return the index value of the last position of specified word
console.log(str.search("development"));
console.log(str.includes("html")); //true
console.log(str.startsWith("   front"));
console.log(str.endsWith("dev   "));

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());

// replace
console.log(str.replace("end", "END"));
console.log(str.replaceAll("end", "END"));

// convert str to array
var strVal = "he-ll-o";
console.log(strVal.split("-"));
console.log("hello world".split(" "));
console.log("hello".split(""));

// "admin@gmail.com".toLowerCase() === "   ADMIN@gmail.com  ".toLowerCase().trim()

// Arrays
// array elements
// index starts from 0
var nums = [10, 20, 30, 40, 60];
var mix = [10, null, undefined, {}, []];

console.log(typeof mix);
console.log(nums.length);
console.log(nums[0]);

// (a == null) or ??

// verify
console.log(Array.isArray(nums)); //true

// add, delete in an array
// push() & pop()
nums.push(100, 200, 300); //add new element in the end of an array
console.log(nums);

nums.pop(); //remove element from end
nums.pop();
nums.pop();
console.log(nums);

// shift() & unshift()
nums.unshift(100, 200); //add new element at the start of an array
console.log(nums);

nums.shift(); //remove element from start
nums.shift();
console.log(nums);

// splice(): is used to add, remove from middle of an array
// considering [10, 20, 30, 40, 60]
nums.splice(1, 2, 100); //start of the index, delete count, elements to be added
console.log(nums);

// just add
// splice(start index, 0 , elements)

// just delete
// splice(start index, delete count)

var colors = ["pink", "red", "green", "blue", "orange", "white"];
console.log(colors.slice(1, 5)); //return a new with array elements from 1st index till 4th index
console.log(colors.includes("red"));
console.log(colors.indexOf("green"));
console.log(colors.lastIndexOf("orange"));

colors.reverse();
console.log(colors);

// convert array to string
var numbers = [10, 2, 4, 5, 6, 7, 100];
console.log(numbers.join()); //"10, 2, 4, 5, 6, 7, 100"
console.log(numbers.join("*"));
console.log(numbers.join(""));

console.log(colors.sort());

// flatten an array
var nested = [10, 2, 30, [100, 200, [2]]];
console.log(nested.flat(2));

// merge array
console.log(nested.concat(mix, colors));

// arrays of object
// [{
//   id: 1,
//   salary, 900
// }, {
//     id: 2,
//   salary, 500
// }, {
//     id: 3,
//   salary, 600
// }]

// for...of (strings & array )
for (var ele of nums) {
  console.log(ele);
}

for (var char of strVal) {
  console.log(char);
}
