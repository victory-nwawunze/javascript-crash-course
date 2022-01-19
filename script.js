/** @format */

console.log("hello worlds");
// alert("hello");
// This is a comments
// alert("this is a comments")

// Variable
/*var a = "somothie";
console.log(a);

// Variable with numbers

var someNumber = 45;
console.log(someNumber);*/

// document.getElementById("someText").innerHTML = "Hey";
// var age = prompt("what your age?");
// document.getElementById("someText").innerHTML = age;

// Function/Numbers in javascript
// var num1 = 5.5;
// console.log(5 * 3);
// Increment
// var num1 = 10;
// num1 = num1 + 1;
// console.log(num1);
// var num1 = 20;
// num1++;
// console.log(num1);

// Decrement numbers in javascript
// var num1 = 30;
// num1 = num1 - 10;
// console.log(num1);
// Or
// var num1 = 10;
// num1--;
// console.log(num1);

// Increment/Decrement by any number you want
// var num1 = 30;
// num1 += 10;
// console.log(num1);

// Function in javascript
// function fun() {
//   alert("this is a function");
// }
// fun();

// function greeting() {
//   var name = prompt("what your name?");
//   var result = "Hello " + name;
//   console.log(result);
// }
// greeting();

//Passing arguements in function
// function setNumber(num1, num2) {
//   var result = num1 + num2;
//   console.log(result);
// }
// setNumber(10, 10);
function greeting(yourName) {
  var result = "Hello " + yourName;
  console.log(result);
}
var question = prompt("what your name");
greeting(question);
