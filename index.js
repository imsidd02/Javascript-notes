//Variable in javascript

// 1)var
// 2)let
// 3)const

//Data types in js -->there are two types of data type primitive and non primitive

// Primitive

// Primitive Data types are predefined. 
// Primitive Data types will have certain values.
// Size depends on the type of data structure.	
// Examples are numbers and strings.	
// It can start with a lowercase.
// example-> Number,String,Undefined,Boolean,Null,BigInt,Symbol


// Non-Primitive

// Non-Primitive data types are created by the programmer
// Non-Primitive data types can be NULL.
// Size is not fixed
// Examples are Array and Linked List.
// It can start with uppercase.
// example->Object,Array

// Number

let score = 10;
console.log(score);
score = 15;
console.log(score);

const pi = 3.14;
console.log(pi);

//string
// with double quote

var message = "game over";
console.log (message);

// with single quote

let anotherMessage = 'game start';
console.log (anotherMessage);


//boolean true or false

let itsRaining = true;
console.log (itsRaining);
itsRaining = false;
console.log (itsRaining);


//null

let a = null;
console.log(a);

//undefined

let b;
console.log(b);


// operators in js
// 1)Arithmetic Operators.
// 2)Assignment Operators.
// 3)Comparison Operators (relational operators).
// 4)String Operators.
// 5)Logical Operators.
// 6)Bitwise Operators.
// 7)Ternary Operators.
// 8)Type Operators.


// 1)Arithmetic Operators.

let c = 3;
let d = 2;

console.log(c + d);
console.log(c - d);
console.log(c * d);
console.log(c / d);
console.log(c % d);


//Comparison Operators

let e = 3;
let f = 2;

console.log(e > f);
console.log(e < f);
console.log(e >= f);
console.log(e <= f);
//equality
console.log(1 == 1);
console.log (2 == 3);
console.log("Hello" == "Hello");
console.log("hey" == "Hey");
console.log(1 == "1");
console.log(0 == false);

// equality and data type both check
console.log(1 === "1");
console.log(0 === false);


// increment and decrement operator

let g = 10;
console.log(g++ + ++g);


// logical operator

// And(&&);
// OR(||);
// NOT(!);


//AND OPRETOR

//IF BOTH CONDITION IS TRUE THEN THE ANS WILL TRUE OTHERWISE FALSE

let knowsProgramming = false;
let marksAbove70 = true;

let calledForInterview = knowsProgramming && marksAbove70;
console.log(calledForInterview);

//OR OPRETOR

//IF ONE CONDITION IS TRUE THEN THE ANS WILL TRUE OTHERWISE FALSE

calledForInterview = knowsProgramming || marksAbove70;
console.log(calledForInterview);


//NOT OPRETOR
// IT CONVERT TRUE VALUE TO FALSE AND FALSE VALUE TO TRUE
console.log(!true);
console.log(!false);


//TERNARY OPERATOR(condition ? statement1 : statement2);
//if my condition will true then the statement1 will excute if false then statement2 will excute

let num = 12;
console.log(num % 2 == 0 ? "even" : "odd");









// git init =>direc->repository
// git status=> check status activities

// every time
// git add =>stage
// git commit -m "message"
// git push origin master


// hello siiddhart










