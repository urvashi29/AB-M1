// Prototype Chain, inheritance
// bind, call, apply

// OOPS
// objects -> property, method

// class: templates of JS objects
// encapsulation
// Parent/base class
class University {
  count = 0; //property

  // initiate the value
  constructor(id, first, age, course) {
    // this is referring to University
    this.id = id;
    this.firstName = first;
    this.age = age;
    this.course = course;
    this.count = 10;
  }

  details() {}
}

// instance, object
const studentOne = new University(1, "Alina", 16, "Computer Science");
console.log(studentOne);

const studentTwo = new University(2, "Alex", 15, "Data Science");
console.log(studentTwo);

// Inheritance
// child/inherited/derived class
class Cafeteria extends University {
  constructor(id, first, age, course, totalPrice) {
    super(id, first, age, course); //call the parent class constructor
    this.totalPrice = totalPrice;
  }
}

const cafe = new Cafeteria(3, "Alaya", 16, "Data Science", 600);
console.log(cafe);

// dervied class can access it's and parent class prop & methods but vice versa is false
// both dervived classes from same parent class can't access each others prop & methods
class Acedemic extends University {
  constructor() {
    super();
  }
}

// JavaScript Prototype
// object function constructor
// encapsulation
function Employees(id, salary, city) {
  this.id = id;
  this.salary = salary;
  this.city = city;
}

// empOne is a instance/object of Employees
const empOne = new Employees(1, 898090, "Banglore");
console.log(empOne);

const empTwo = new Employees(2, 909090, "Pune");
console.log(empTwo);

// Task
// 1. Create a class Car: city(), specialFeature()
// name, brand, color, manufactureYear

// 2. Create a class Book: type_of_book()
// no. of pages, type of pages, author

// 3. Create a class Animal: walk(), eat(), climb()
// gender, name, disease

// Inheritance:
// 1.  Create parent class Electronics (methods & properties: name, version, company name)
// and child class(laptop, ipad, mobile, tablet):
// create methods configuration, price()
