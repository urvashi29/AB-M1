// Prototype: internally used for inheritance
function Employees(id, salary, city) {
  this.id = id;
  this.salary = salary;
  this.city = city;
}

const empOne = new Employees(1, 898090, "Banglore");
console.log(empOne);
console.log(empOne.constructor); //this is object belong to which class/object function constructor

// Prototypal Inheritance
function Programmer(id, salary, city, language) {
  Employees.call(this, id, salary, city);
  this.language = language;
}

// Inherit the prototype
Programmer.prototype = Object.create(Employees.prototype);

// Manually set the constructor
Programmer.prototype.constructor = Programmer;

const p = new Programmer(2, 90901, "Banglore", "JavaScript");
console.log(p);

function Shapes(id, type) {
  this.id = id;
  this.type = type;
}

// id, type is called instance member
// radius is called prototype
Shapes.prototype.radius = 20;
Shapes.prototype.circumference = function () {};

const s = new Shapes(1, "circle");
console.log(s);
console.log(s.__proto__);
console.log(Object.getPrototypeOf(s));

// Array()
const arr = [10, 2, 30, 10];
console.log(arr);

console.log(Array.isArray());

// String()
const str = new String("hello");
console.log(str);

// Number()
const num = new Number(20);
console.log(num);

// Object ()
let person = {
  name: "alina",
  age: 20,
};

console.log(person);

//prototype chain

// function Object() {
// this.keys;
// }

// function Array () {

// }

Array.prototype.popData = function () {
  console.log("hello");
};

//call
let user = {
  fullName: function (coutryOne, countryTwo) {
    console.log(
      "My name is " +
        this.firstName +
        " " +
        this.lastName +
        " ." +
        countryTwo +
        " " +
        coutryOne,
    );
  },
};

let emp = {
  firstName: "Alex",
  lastName: "Joe",
};

user.fullName.call(emp, "Indian", "Australia");

// apply()
user.fullName.apply(emp, ["India", "Canada"]);

console.log(Math.max(10, 2, 100, 90, 70));

const nums = [10, 2, 100, 90, 70];
console.log(Math.max.apply(null, nums));

// bind
let employee = {
  id: 10,
  firstName: "alina",
  details: function (country) {
    console.log(this.firstName);
  },
};

const d = employee.details.bind(employee, "india");
d();

// try it in console
// console.log(Object.defineProperty());
