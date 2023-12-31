const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
    genre: ["fantasy", "fiction"],
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
    genre: ["fantasy", , "fiction"],
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,
    genre: ["historical", "non-fiction"],
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,
    genre: ["historical", "fiction"],
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,
    genre: ["fiction"],
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
    genre: ["fiction"],
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861,
    genre: ["historical", "fiction"],
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868,
    genre: ["womens", "historical", "fiction"],
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];

//Array of authors and the book they wrote
//"--- wrote --- in ---"
books.forEach((book) => {
  console.log(`${book.authorFirst} ${book.authorLast} wrote ${book.name} in ${book.publishDate}`);
});

// //Sort books from oldest to most recent
const sortAge = books.sort((a, b) => (a.publishDate - b.publishDate))
console.log(sortAge);

// //sort books alphabetically
titles.sort();
console.log(titles);

<<<<<<< Updated upstream
// //Find who wrote War and Peace
let bookName = prompt("Title of the Book")
const authorfinder = books.filter((el) => el.name === bookName);
authorfinder.forEach((el) => console.log(`${el.authorFirst} ${el.authorLast} wrote ${bookName}`));

// //how many books were written before 1900?
const before1900 = books.filter((el) => el.publishDate < 1900);
console.log(`${before1900.length} book(s) were written before 1900`);

//was there at least one book published within the last 100 years?
const currentYear = new Date().getFullYear();
const hundredyears = books.filter(book => currentYear - book.publishDate <= 100)
if (hundredyears.length > 0) {
  console.log("yes")
} else {
  console.log("no") 
}

//was every book published within the last 100 years?
const everyhundredyears = books.every(book => currentYear - book.publishDate <= 100)
// console.log(`${everyhundredyears}`);
if (everyhundredyears === "true") {
  console.log("yes")
} else {
  console.log("no")
}

//print a list of books that "includes" the genre historical
const historicalbooks = books.filter(book => book.genre.includes("historical"));
console.log(historicalbooks);
=======

>>>>>>> Stashed changes
