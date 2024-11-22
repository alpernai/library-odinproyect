// ---------------Variables and Objects---------------

const libraryBody = document.getElementById('library-body');
const addBookButton = document.getElementById('add-book-button');
const addBookModal = document.getElementById('add-book-modal');
const bookForm = document.getElementById('book-form');
const cancelButton = document.getElementById('cancel-button');

const myBooks = [
    {title: 'To Kill A Mockingbird', author: 'Harper Lee', year: 1960, status: 'read'},
    {title: '1984', author: 'George Orwell', year: 1949, status: 'not read'},
    {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925, status: 'reading'},
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

    libraryBody.appendChild(card);
}

// ---------------Execution---------------

addBookButton.addEventListener('click', () => addBookModal.showModal());
cancelButton.addEventListener('click', () => addBookModal.close());

bookForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const title = document.getElementById('title-input').value;
    const author = document.getElementById('author-input').value;
    const year = document.getElementById('year-input').value;
    const status = document.getElementById('status-input').value;

    const newBook = new Book(title, author, year, status);

    myBooks.push(newBook);

    console.log(books);

    document.getElementById('book-form').reset();
});

createBookCard()   

// ---------------Plan---------------


// 1. createBookCard - creates book card containing empty elements and appends it into libraryBody element. 
// 2. addNewBook - modal input it fed into a constructor function that creates a new book object and adds it to the library array. 
// 3. deleteBook - deletes book card from DOM and book object from the array. 
// 4. createLibrary - creates individual book cards for every book object in the array.
