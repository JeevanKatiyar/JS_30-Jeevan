//DAY 2: OPERATORS
//Activites 1: Artithmetic Operations

let num1 = 10;
let num2 = 90;

let Sum = num1 + num2; // task 1
let Sub = num2 - num1; // task 2
let Mul = num1 * num2; // task 3
let Div = num2 / num1; // task 4
let Mod = num2 % num1; // task 5

console.log("Sum Vaule is :", Sum);
console.log("Sub Value is :", Sub);
console.log(" Multiplication Value is :", Mul);
console.log("Div Value is :", Div);
console.log("Modulas Value is :", Mod);

// Activity 2: Assignment operator

// Task 6: += operator

let price = 100;
price += 20;
console.log("Selling price is 20 % more than price :", price);

// Task 7: -= operator
let marks = 100;
let negativeMark = (marks -= 10);
console.log("Marks after reduction is:", negativeMark);

// Activity 3: Comparison Opeartor:

//Task 8

let portugal = 5;
let france = 4;

if (portugal > france) {
  console.log(" winner is : Portugal");
} else {
  console.log("winner is: france");
}

let tomMarks = 99;
let jerryMarks = 80;
//greatest of two
if (tomMarks > jerryMarks) {
  console.log("tom");
} else {
  console.log("jerry");
}
// smallest of two
if (tomMarks < jerryMarks) {
  console.log("tom");
} else {
  console.log("jerry");
}

// task 9:
let score = 92;

if (score >= 90) {
  console.log("A grade");
} else if (score >= 75) {
  console.log("B grade");
} else if (score >= 60) {
  console.log("C grade");
} else if (score >= 50) {
  console.log("D grade");
} else {
  console.log("try again");
}

//task 10

let a = 10;
let b = 90;
let c = "10";

console.log("comparing a is equal to be b:", a == b);
console.log("comparing a is equal to be c:", a === b); // strict comparission compares the value and the data types

console.log("comparing a is equal to be a:", a == a); // its comparing the value not the data type

//Activity 4: Logical Operators:

let sem1 = 90;
let sem2 = 30;
let year = sem1 + sem2;

// task 11: && operator : both condition needs to be true:

if ((sem1, sem2 >= 60 && year >= 160)) {
  console.log("congratuation for being amoung the topper");
} else {
  console.log("try again");
}
// task 12: || operator : any one condition needs to be true:

if ((sem1, sem2 >= 40 || year >= 100)) {
  console.log("congratuation you cleared all exam!!");
} else {
  console.log("failed in any one assessment, Try Again!");
}

// task 13: ! operator : both condition needs to be true:
let isSunny = false;

if (!isSunny) {
  console.log("its a pleasent weather");
} else {
  console.log("its hot outside");
}

//Activity 5: Ternary operator
// task 14: syntax: condition ? exprIfTrue : exprIfFalse

let number = -10;

let numType = number >= 0 ? "positive number" : "negative number";
console.log(numType);

//example 2:
// let Age = 18;

// let votingAge = Age >= 18 ? "eligible to vote!" : "wait few year !";
// console.log(votingAge);
