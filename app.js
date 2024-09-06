const library = [
  {
    title: "Deception Point",
    author: "John Denver",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Lost Symbols",
    author: "John Denver",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "The Lord of the Rings",
    author: "J. J. R. Tolkien",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

console.log(library[1].status.read);

library.forEach((book) => (book.status.read = true));

console.log(library[1].status.read);

// Destructuring assignment makes it possible to unpack values from arrays or properties from objects, into distinct variables.
const { title: firstBook } = library[0];
console.log(firstBook);

// Converting the object into a JSON representation

const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);
