/** @format */

// console.log("hello worlds");
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
// function greeting(yourName) {
//   var result = "Hello " + yourName;
//   console.log(result);
// }
// var question = prompt("what your name");
// greeting(question);

// While Loop
// var num = 0;
// while (num < 100) {
//   num += 1;
//   console.log(num);
// }

// For Loop
//

//Length() method
// let fruit = "banana";
// console.log(fruit.length);

//IndexOf() method
// let fruit = "banana";
// console.log(fruit.indexOf("an"));

// Replace() method
// let fruit = "banana";
// console.log(fruit.replace("ban", 444));

// Slice() method
// let fruit = "banana";
// console.log(fruit.slice(3));

// // UpperCaseMethod() method
// let fruit = "banana";
// console.log(fruit.toUpperCase());

// LowerCaseCaseMethod() method
// let fruit = "banana";
// console.log(fruit.toLowerCase());

// CharAt() method
// let fruit = "banana";
// console.log(fruit.charAt(3));

// split() method
// let fruit = "banana, berry";
// console.log(fruit.split(","));

// Arrays in Javascript
// let fruits = ["apple", "banana", "mango", "orange"];
// console.log(fruits);
// Or
// let fruits = new Array("orange", "watermelon", "mango", "pawpaw");
// console.log(fruits);
// alert(fruits[1]);
// We can also Loop through an Array
// let fruit = ["mango", "banana", "orange", "lemon"];
// for (let i = 0; i < fruit.length; i++) {
//   console.log(fruit);
// }
// We can also convert an array to a string using the ".toString()" method
// let fruit = ["mango", "banana", "water-melon", "paw-paw"];
// console.log("to string =>", fruit.toString());
// We can also join things to a string in an array
// let fruit = ["mango", "pawpaw", "orange", "pears"];
// console.log(fruit.join("-"));
// we can also remove the last item in an array using the ".pop()" method
// let fruit = ["banana", "pear", "mango", "orange"];
// console.log(fruit, fruit.pop(), fruit);

// we can also add a new item in an array with the ".push()" method, this will add an item to the end of the array
// let fruit = ["mango", "banana", "water-melon", "orange"];
// console.log(fruit, fruit.push("pear"), fruit);
// We can also remove first item in an array using the ".shift()" method
// let fruit = ["mango", "apple", "pear", "water-melon"];
// console.log(fruit, fruit.shift(), fruit);
// We can also add a new item in the front/begining of an array using the ".unshift()" method.
// let fruit = ["mango", "orange", "lemon", "pear"];
// console.log(fruit, fruit.unshift("apple"), fruit);
// We can add or join an array together using the ".concat()" method
// let fruits = ["mango", "apple", "water-melon", "pear"];
// let vegetables = ["tomato", "water-leaf", "meat"];
// let allgrocries = fruits.concat(vegetables);
// console.log(allgrocries);
// we can also use the ".slice()" to a particular item in an array
// let fruit = ["apple", "mango", "water-melon", "pear", "orange"];
// console.log(fruit, fruit.slice(3), fruit);
// we can also use the ".reverse()" this is to arrange an items from the top to  bottom in an array
// let fruit = ["mango", "apple", "banana", "pear"];
// console.log(fruit, "reverse =>", fruit.reverse(), fruit);
// We can use the ".sort()" method to arrange numbers in an array from the lowest to the highest
// let someNumbers = [
//   "100",
//   "200",
//   "1",
//   "900",
//   "90",
//   "50",
//   "20",
//   "290",
//   "40",
//   "30",
//   "89",
// ];
// console.log(someNumbers, "sorted ==>", someNumbers.sort(), someNumbers);
// We can also use the ".sort()" to arrange an array alphabetically
// let fruit = ["apple", "mango", "lemon", "tomato", "carrot"];
// console.log(fruit, "sorted ==>", fruit.sort(), fruit);
// We can also sort number in an acceding or decending order using the ".sort()" method
let someNumber = ["800", "1", "900", "400", "200", "300"];
console.log(
  someNumber,
  "accending ==>",
  someNumber.sort(function (a, b) {
    return a - b;
  })
); //Asc ending order
console.log(
  someNumber,
  "decending ==>",
  someNumber.sort(function (a, b) {
    return b - a;
  })
); //descending order
