// DAY 6: Arrays:
// Activity 1: Array Creation and Access

// task 1: create

let num = [1, 2, 3, 4, 5];
console.log(num);

//  Task 2: access
console.log(num[0], num[num.length - 1]);

// Activity 3:  array method basic

//example
// let fruit = ["apple", "banana", "mango", "grape"];

// fruit.push("strawberry");
// console.log(fruit);

//task 3
console.log(num);
num.push(6, 7);

console.log(num);

//task 4
num.pop();
console.log(num);

//task 5:
num.shift(); // removes the first element.
console.log(num);

//task 6:
num.unshift(1); // add the number to the first position.
console.log(num);

// Activity 3: Array method (intermediate)

// Task 7:

// square
let number = [1, 2, 3, 4, 5];
let sqNum = number.map((number) => number * number);

console.log("square root of num", sqNum);

// task 7 :- map method
// creates a new array with result that is provided after excuting the function.

console.log(num);

let doubleNum = num.map((num) => num * 2);
console.log("double the num:", doubleNum);

// task 8 :- filter method
// creates an new array of element that pass the specified condition.

let evenNum = num.filter((num) => num % 2 == 0);
console.log("the num array consist of :", num);
console.log("even numbes in the array num are:", evenNum);

let oddNum = num.filter((num) => num % 2 !== 0);
console.log("odd number in the array are: ", oddNum);

// task 9: reducer method

let sumNumb = num.reduce(
  (initialCount, currentValue) => initialCount + currentValue
);
console.log("the array is:", num);
console.log("sum of the number is :", sumNumb);

// Activity 4: array iteration
//Task 10:

console.log("element of the array", num);

for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}

//Task 11:
console.log("element of the array", number);
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) {
  console.log(number);
});

// Activity 5: Multi- Dimensional Array:
//Task 12:
let numb = [
  [1, 2, 3], //0
  [4, 5, 6], //1
  //[0, 1, 2]
  [7, 8, 9], //2
];

console.log(numb);
console.log(numb[1][1]); // 5 ie 2nd row , 2 element.
console.log(numb[2][2]);
