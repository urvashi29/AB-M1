// callback function -> c
function getData(a, b, c) {
  const result = a + b;
  c(result); //calling a callback function
}

// r-> callback parameter
getData(10, 20, (r) => {
  console.log("Result: " + r);
});

// Application: DOM Manipulation, Timing events, Promises, Array Helper functions

// alternate syntax
function result(r) {
  console.log("Result: " + r);
}

function mutiply(x, y, c) {
  const m = x * y;
  console.log(c); //
  c(m); //calling the callback function (result)
}

mutiply(100, 2, result); //result -> callback function

// HOF: High ordered function): A function that takes another function as an argument or returns a function as a result
// e.g: multiply, geData

// Debugging: we can debug our JS code
// understand the flow of code

// 1. Use console.log() to print values and check the flow.
// 2. Breakpoints/Debugger in browser or inside vs code

for (let i = 0; i <= 10; i++) {
  console.log(i);
}
