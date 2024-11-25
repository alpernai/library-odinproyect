// ---------------Variables---------------
const libraryBody = document.getElementById('library-body');
const addBookButton = document.getElementById('add-book-button');
const addBookModal = document.getElementById('add-book-modal');
const bookForm = document.getElementById('book-form');
const cancelButton = document.getElementById('cancel-button');

const myBooks = [
    { title: 'To Kill A Mockingbird', author: 'Harper Lee', year: 1960, status: 'read' },
    { title: '1984', author: 'George Orwell', year: 1949, status: 'not read' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925, status: 'reading' },
];

// ---------------Functions---------------

function Book(title, author, year, status) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.status = status;
}

function createBookCard(book) {
    const card = document.createElement('div');
    const title = document.createElement('h2');
    const author = document.createElement('h3');
    const year = document.createElement('p');
    const status = document.createElement('p');

    card.className = 'book-card';
    title.className = 'book-title';
    author.className = 'book-author';
    year.className = 'book-year';
    status.className = 'book-status';

    title.textContent = `${book.title}`;
    author.textContent = `${book.author}`;
    year.textContent = `${book.year}`;
    status.textContent = `${book.status}`;

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(year);
    card.appendChild(status);

    return card;
}

function createLibrary() {
    const bookCardContainer = document.createElement('div');
    bookCardContainer.id = 'book-card-container';
    bookCardContainer.style.display = 'grid';
    bookCardContainer.style.gap = '1rem';
    bookCardContainer.style.gridTemplateColumns = 'repeat(auto-fill, minmax(300px, 1fr))';

    myBooks.forEach((book) => {
        const card = createBookCard(book);
        bookCardContainer.appendChild(card);
    });

    libraryBody.appendChild(bookCardContainer);
}

function addBookToLibrary(book) {
    const bookCardContainer = document.getElementById('book-card-container');
    const newBookCard = createBookCard(book);
    bookCardContainer.appendChild(newBookCard);
}

// ---------------Execution---------------

createLibrary();

addBookButton.addEventListener('click', () => addBookModal.showModal());
cancelButton.addEventListener('click', () => addBookModal.close());

bookForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.getElementById('title-input').value;
    const author = document.getElementById('author-input').value;
    const year = document.getElementById('year-input').value;
    const status = document.getElementById('status-input').value;

    const newBook = new Book(title, author, year, status);

    myBooks.push(newBook);
    addBookToLibrary(newBook);

    bookForm.reset();
    addBookModal.close();
});
