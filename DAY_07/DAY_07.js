// DAY 7: Objects
// Activity 1: Object Creation and Access

//Task 1:
let book = {
  title: "if tomorrow come",
  author: "sydney sheldon",
  year: 1985,
};
// Task 2:
console.log(book);
console.log(book.title);
console.log(book["author"]);

// Activity 2: Object method.
//task 3:
let book1 = {
  title: "if tomorrow come",
  author: "sydney sheldon",
  year: 1985,
  getSummary: function () {
    return `${this.title} by the ${this.author}`;
  },
  // task 4:
  updateYear: function (newYear) {
    this.year = newYear;
  },
};
book1.updateYear(2021);
console.log(book1.getSummary());
console.log(book1);

// Activity 3: nested object

//task 5:
const library = {
  name: "City Library",
  books: [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
      getDetails: function () {
        //Activity 4: This keyword

        //task 7:
        return `${this.title} (${this.year})`;
      },
    },
    {
      title: "1984",
      author: "George Orwell",
      year: 1949,
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
    },
  ],
};

//task 6:
// Log the entire library object to the console
console.log(library.name);
console.log();
library.books.forEach((books) => {
  console.log(books.title);
});

//Activity 5:

//task 8:

const book2 = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
  getDetails: function () {
    return `${this.title} (${this.year})`;
  },
};

// Use for...in loop to iterate over properties of the book object
for (let property in book2) {
  if (book2.hasOwnProperty(property)) {
    // Check if the property is directly on the object
    console.log(`${property}: ${book2[property]}`);
  }
}

// Task 9:

const book3 = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
  getDetails: function () {
    return `${this.title} (${this.year})`;
  },
};

// Log all keys of the book object
console.log("Keys:");
Object.keys(book3).forEach((key) => {
  console.log(key);
});

// Log all values of the book object
console.log("Values:");
Object.values(book3).forEach((value) => {
  console.log(value);
});
