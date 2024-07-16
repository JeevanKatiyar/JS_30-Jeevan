// DAY 04: LOOPS
//Activity 1: For loop

//Task 1:write a program to print numbers from 1 to 10 using a for loop.

let int = 0;
for (let i = 1; i <= 10; i++) {
  console.log(`SNO ${i}`);
}

// Task 2: table of 5;

let numb = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${i} x ${numb} =  ${i * numb}`);
}

//Activity 2: While loop
//Task 3:

let number = 0;
for (let i = 1; i <= 10; i++) {
  number += i; // number = number + i

  console.log(`After adding ${i}, the sum is ${number}`);
}
console.log(number);

//Task 4: print number from 10 to 1 using while loop

// let num1 = 0;
// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

//using while loop //task 4
let a = 10;
while (a > 0) {
  console.log(a);
  a--;
}

//using do while
// let i = 10;
// do {
//   console.log(i);
//   i--;
// } while (i >= 0);

// Activity 3: Do while loop
//task 5:print number 1 to 5

let i = 0;
do {
  i++;
  console.log(i);
} while (i < 5);

//task 6: factorial of a number;

let num = 5;
let factorial = 1;
let j = num;

do {
  factorial = factorial * j;
  j--;
} while (j > 0);
console.log("factorial is", factorial);

//task 7: pattern

// let rows = 5;
// let i = 1;
// do {
//   console.log("*".repeat(i));
//   i++;
// } while (i <= rows);

let rows = 5;
for (let i = 1; i <= rows; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern = pattern + "*";
  }
  console.log(pattern);
}

//Activity 5: Loop Control Statement;

//task 8:

let num2 = 10;

for (let i = 1; i <= num2; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

//task 9:
let num1 = 10;

for (let i = 0; i <= num1; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}

// self learning
// while loop:

/* --
    While loop syntax:

    while(condition){
    code
    }


    using for loops to iterante over the object

    let name = {
  1: "jeevan",
  2: "pikachu",
  3: "shiv",
  4: "motu",
};

for (let key in name) {
  console.log(key, name[key]);
}

*/
