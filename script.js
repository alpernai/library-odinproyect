// ---------------Variables and Objects---------------

const libraryBody = document.getElementById('library-body');
const addBookButton = document.getElementById('add-book-button');
const addBookModal = document.getElementById('add-book-modal');
const cancelButton = document.getElementById('cancel-button');

const books = [
    {title: 'To Kill A Mockingbird', author: 'Harper Lee', pages: 281, year: 1960, status: 'read'},
    {title: '1984', author: 'George Orwell', pages: 328, year: 1949, status: 'not read'},
    {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', pages: 180, year: 1925, status: 'reading'},
    {title: 'Pride and Prejudice', author: 'Jane Austen', pages: 279, year: 1813, status: 'read'}
];

// ---------------Functions---------------

function Book(title, author, year, status) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.status = status;
}

function createBookCard() {         
    const card = document.createElement("div");
    const title = document.createElement("h2");
    const author = document.createElement("h3");
    const year = document.createElement("p");
    const status = document.createElement("p");

    card.className = "book-card";
    title.className = "book-title";
    author.className = "book-author";
    year.className = "book-year";
    status.className = "book-status";

    card.appendChild(status);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(year);

    library-body.appendChild(card);
}

// ---------------Execution---------------

addBookButton.addEventListener('click', () => addBookModal.showModal());


createBookCard()

// ---------------Plan---------------


// 1. createBookCard - creates book card containing empty elements and appends it into libraryBody element. 
// 2. addNewBook - modal input it fed into a constructor function that creates a new book object and adds it to the library array. 
// 3. deleteBook - deletes book card from DOM and book object from the array. 
// 4. createLibrary - creates individual book cards for every book object in the array.
// 5. displayModal - when Add Book button is clicked, create a dialog modal with inputs, an Add button and a cancel button. Cancel closes and empties modal. Add creates new book object IF all fields are complete. 
// 6.  
