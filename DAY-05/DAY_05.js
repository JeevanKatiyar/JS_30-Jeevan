//DAY 5: Functions:
//Activities 1: Function Declaration

// Task 1:

function check(x) {
  if (x % 2 == 0) {
    console.log("its even number");
  } else {
    console.log("its odd number");
  }
}
check(9010);

//Task 2:

function square(a) {
  sq = a * a;
  console.log("square of a number is :", sq);
}
square(3);

// using arrow function

let sq1 = (n) => n * n;
console.log("square is:", sq1(10));

//Activity 2: Function Expression.
// Task 3:

function Maximum(x, y) {
  if (x > y) {
    console.log("greatest number amoung the two is:", x);
  } else if (y > x) {
    console.log("greates number amoung the two is:", y);
  } else {
    console.log("equal number ");
  }
}
Maximum(99, 90);

//Task 4: Concatenate two string
function concate(a, b) {
  c = a + b;
  console.log("the concatenated string is :", c);
}
concate("jeevan", "kumar");

// Activity 3: Arrow Function.
// Task 5:
let sum = (a, b) => a + b;
console.log(" using arrow function-> Sum is :", sum(1, 9));

//Task 6:  write a function to check if a string contains a specific character and return a boolean value.

function have(word, char) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === char) {
      return true;
    }
  }
  return false;
}
console.log(have("anu", "u"));
console.log(have("jeevan", "k"));

// task 6: write a arrow function to check if a string contains a specific character and return a boolean value.

let similar = (word, char) => {
  for (let i = 0; i < word.length; i++) {
    if (word[i] == char) {
      return true;
    }
  }
  return false;
};
console.log(similar("jeevan ", "a"));

/* 

    Arrow Function:
    let func = (arg1,.., argN) => expression;

    In other words, it’s the shorter version of:

    let func = function(arg1, arg2, ..., argN) {
    return expression;
};

*/

// Activity 4: Function Parameters and Default Values

//Task 7:

function area(length = 10, breadth = 20) {
  return length * breadth;
}
console.log(area(5, 5));
console.log(area());

// Task 8:

function greets(name = "guest", age = 25) {
  console.log(`welcome ${name} congratulation for turning ${age}`);
}
greets();
greets("jeevan", 26);

// Activity 5: Higher order function

//Task 9:

function callNTimes(saysHello, n) {
  for (let i = 0; i < n; i++) {
    saysHello();
  }
}

function saysHello() {
  console.log("hey there!");
}

callNTimes(saysHello, 5);

//Task 10:
function compose(fn1, fn2, value) {
  return fn2(fn1(value));
}

// Example functions to be passed
function add2(x) {
  return x + 2;
}

function multiplyBy3(x) {
  return x * 3;
}

// Apply `add2` to 5, then apply `multiplyBy3` to the result
const result = compose(add2, multiplyBy3, 5);

console.log(result); // Output: 21
