// DAY1: Variables and Data types

//Activity 1: Variable Declaration.
//Task 1:

var goal = 4;
console.log(goal);

// Task 2:
let playerName = "Ronaldo";
console.log(`Player of the tournament goes to : ${playerName}`);

//Activity 2: Constant Declaration.
//Task 3:

const attendance = true;
console.log(attendance);

//Activity 3: Data Types.
// Task 4:

let rollNumber = 10; //number
let sname = "Jeevan kumar"; //string
let attendance1 = true; // boolean

let car = {
  // object
  model: 2024,
  colour: "black",
  engine: "turbo",
  brand: "Audi",
};

let fruits = []; // array
// created an empty array and then used push method to add the items in it
fruits.push("apple");
fruits.push("mango");
fruits.push("banana");
fruits.push("grapes");

// directly creating an array
// let veg = ["tomato", "potato", "cabbage"];

console.log(typeof rollNumber);
console.log(typeof sname);
console.log(typeof attendance1);
console.log(typeof car);
console.log(typeof fruits);

//Activity 4: Reassing variables
//Task 5

let favouritePlayer = "messi";
console.log(favouritePlayer); //output: messi
favouritePlayer = "Modric";
console.log(favouritePlayer); //output: Modric

//Activity 5: Understanding Const,
//Task 6:

const DOB = 1998;

console.log(DOB); //output :1998

// DOB = 1999;
//console.log(DOB); //TypeError: Assignment to constant variable.

// number , string,  boolean, object , array ,

// Feature Request:
let varNum = 108;
let varName = "student";
let varPresent = true;
let varobject = {
  name: "jeevan",
  age: 26,
  place: "hyderabad",
};

let varArray = ["shiv", "akanksha", "ma", "papa"];
console.log(typeof varNum);
console.log(typeof varName);
console.log(typeof varPresent);
console.log(typeof varobject);
console.log(typeof varArray);
