// DAY 3: Control Structure.
// Activity 1: If- Else Statements

//Task 1:
let checkNumb = 10;

if (checkNumb > 0) {
  console.log("The number is : Positive");
} else if (checkNumb == 0) {
  console.log("Then number is : Zero");
} else {
  console.log("the number is : Negative");
}

// Task 2 :

let personAge = 19;

if (personAge >= 18) {
  console.log("eligible to vote!");
} else {
  console.log("not eligible for voting ");
}

//Activity 2: Nested if Else Statements

//task 3:
// find largest of three number

let num1 = 9;
let num2 = 110;
let num3 = 10;

if (num1 >= num2 && num1 >= num3) {
  console.log(num1, "is the largest num");
} else if (num2 >= num1 && num2 >= num3) {
  console.log(num2, "its the largest number");
} else {
  console.log(num3, "is the largest");
}

// if (num1 >= num2) {
//   if (num1 >= num3) {
//     console.log(num1, "is the largest");
//   } else {
//     console.log(num3, "its the largest");
//   }
// } else {
//   if (num2 >= num3) {
//     console.log(num2, "is the largest");
//   } else {
//     console.log(num3, "is the largest");
//   }
// }

//Activity 3: Switch Case
// task 4:

let day = 1;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("thrusday");
    break;
  case 5:
    console.log("friday");
    break;
  case 6:
    console.log("saturday");
    break;
  case 7:
    console.log("sunday");
    break;
  default:
    console.log("number not in specified range");
}

//Task 5:

// let score = 91;

// switch (score) {
//   case score >= 90:
//     console.log("A Grade");
//     break;

//   case score >= 80:
//     console.log("B Grade");
//     break;
//   case score >= 70:
//     console.log("C Grade");
//     break;
//   case score >= 60:
//     console.log("D Grade");
//     break;
//   case score >= 50:
//     console.log("E Grade");
//     break;
//   default:
//     console.log("try Again");
//     break;
// }

let score = 100;

if (score >= 90 && score <= 100) {
  console.log("a Grade");
} else if (score >= 70 && score < 90) {
  console.log("b grade");
} else if (score >= 50 && score < 70) {
  console.log("c grade");
} else if (score >= 40 && score < 50) {
  console.log("d grade");
} else {
  console.log("F grade");
}

// Activity 4: Conditional (ternary) Operator
// task 6:

let num = 90;
let evenOrOdd = num / 2 == 0 ? "Even Number" : "Odd Number";
console.log(evenOrOdd);

// Activity 5: Combining Conditions
// task 7:
// leap year (divisible by 4, but not 100, unless also divisible 400)
let year = 2008;
if (year % 4 == 0 || year % 400 == 0) {
  console.log("its a leap year");
} else {
  console.log("its not");
}
