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

// Log the entire library object to the console
console.log(library.name);
console.log();
library.books.forEach((books) => {
  console.log(books.title);
});
