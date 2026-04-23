// variables
var productName = "Corsair Vengeance i7500 Gaming PC"; //string
var price = 9000; //number
var isVerified = false; //boolean
var a = "sugar";
var b = "salt";

var gst_electronics = 15;
totalPrice = price + gst_electronics;

// gst_electronics
// gst_electronics

console.log(productName);
console.log(price);

// console.log(x);//give error

var firstName; //declaration
console.log(firstName); //
firstName = "Alex"; //assigning a value/initialization
console.log(firstName);

// Datatypes
var str = "090000#$W#@";
var num = 90.78;
console.log(str);
console.log(typeof str); //string
console.log(typeof price); //number
console.log(typeof num); //number
console.log(typeof isVerified); //boolean

// undefined
var y;
console.log(y); //undefined
console.log(typeof y); //undefined
y = 20;
console.log(y); //20

// null
var z = null;
console.log(z); //null
console.log(typeof z); //object

//objects
//key/property value pair
// object literal
var person = {
  firstName: "Alina",
  lastName: "Joe",
  age: 20,
  isMarried: false,
  contact: {
    emailAddress: "alina@gmail.com",
    contactNumber: 9999999999,
  },
  salary: 90000,
  address: {
    pinCode: 999999,
    state: "Telanagana",
  },
  occupation: "Student",
};

console.log(person);

// To access object properties
console.log(person.occupation);
console.log(person.salary);
console.log(typeof person.salary);
console.log(person.contact.emailAddress);

console.log(typeof person); //

//array
//index/position start from 0
var numbers = [10, 2, 3, 1, 20];
console.log(numbers[0]); //10
console.log(numbers[3]); //1

console.log(numbers[5]); //undefined

var colors = ["pink", "lavender", "white", "purple"];
var mixed = ["hello", 90, {}, [], undefined, null];

console.log(typeof colors); //object
console.log(typeof mixed); //object
console.log(typeof numbers); //object

console.log(colors);

// var product = {

// }

// Array of objects
var employees = [
  {
    id: 1,
    name: "alex",
    salary: 90900,
  },
  {
    id: 2,
    name: "alaya",
    salary: 90000,
  },
  {
    id: 3,
    name: "alaya H",
    salary: 80000,
  },
];

// Task: create array of objects: products, customer, doctors, users, student, movies
