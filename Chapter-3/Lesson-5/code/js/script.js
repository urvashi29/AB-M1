// Objects
// key-value or property-value pair
// 1. object literal
var person = {
  id: 1,
  firstName: "Alina",
  lastName: "Joe",
  salary: 10000,
  contact: {},
};

// to access property
console.log(person.firstName);
console.log(person["salary"]);

// to add new property
person.city = "Pune";
console.log(person);

// to update new property
person.salary = 20000;
console.log(person);

// delete new property
delete person.city;
console.log(person);

// 2. Object.create()
var newObj = Object.create(person);
console.log(newObj.firstName);

// 3. new keyword (after prototype (OOPS))

console.log(Object.keys(person)); //return all the properties in the form array
console.log(Object.values(person)); //return all the values in the form array

// for... in
for (var prop in person) {
  console.log(prop); //"id"
  console.log(person[prop]); //
}

// Map: built-in object in js to store key-value pair, where key can be of any datatype
var x = new Map(); //x is a object

x.set("name", "John");
x.set(20, "random value");
x.set(function () {}, "hello");
console.log(x);

x.delete(20);
console.log(x);
console.log(x.has("name"));
console.log(x.size);
console.log(x.get("name"));
// x.clear(20);
// console.log(x);

// convert map object to array
console.log(Array.from(x));

// Set: built-in object, duplicates are not allowed
var newSet = new Set([10, 20, 50, 60, 10, 20]); //object
console.log(newSet);

newSet.add(100);
newSet.add(200);

newSet.delete(10);

console.log(newSet.has(100));
console.log(newSet);
console.log(newSet.size);

// convert set object to array
console.log(Array.from(newSet));

// Math object
console.log(Math.PI);
console.log(Math);

// Date object
var d = new Date();
console.log(d);

// Multi-dimensional array
var newArr = [];

// add
newArr.push([10, 20], [100, 200], [5, 6]);
console.log(newArr);

// access
console.log(newArr[0]); //[10, 20]
console.log(newArr[0][0]);
console.log(newArr[1][0]);

// update
newArr[2][1] = 1;
console.log(newArr);

newArr.pop();
console.log(newArr);

// remove from inner array
newArr[1].pop();
console.log(newArr);

// iterate over array

let matrix = [
  [1, 2, 3],
  [5, 6, 0],
  [1, 10, 20],
];

// nested loops
for (var i = 0; i < matrix.length; i++) {
  for (var j = 0; j < matrix.length; j++) {
    console.log(matrix[i][j]);
  }
}

// JSON (cover after functions)

// task
// extract first five letters from a string (' gfuh ieiuei ')
// get the length of a string and make it uppercase ('hduej dij')
// take a string, make it lowercase and trim it ('   biji jdo   ')
// replace a specified word in a string ('', '')
// revise type of each datatype
// create an object for animal, book
// find the duplicate in a string() (use array)
// reverse a string (use array method)
// find the highest and lowest value in array -loops
// display first 3 elements in an array and console using loops [1,3, 4, 10, 20]
// remove 4th (index) element and add 2 element there [1,3, 4, 10, 20, 100]
