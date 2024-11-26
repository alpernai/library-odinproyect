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

function createBookCard(book, index) {
    const card = document.createElement('div');
    const title = document.createElement('h2');
    const author = document.createElement('h3');
    const year = document.createElement('p');
    const status = document.createElement('p');
    const deleteButton = document.createElement('button');
    const toggleStatusButton = document.createElement('button');
  
    card.className = 'book-card';
    title.className = 'book-title';
    author.className = 'book-author';
    year.className = 'book-year';
    status.className = 'book-status';
    deleteButton.className = 'delete-button';
    toggleStatusButton.className = 'toggle-status-button';

    title.textContent = `${book.title}`;
    author.textContent = `${book.author}`;
    year.textContent = `${book.year}`;
    status.textContent = `${book.status}`;
    toggleStatusButton.textContent = 'Change Status';

    deleteButton.addEventListener('click', () => deleteBookCard(index));
    toggleStatusButton.addEventListener('click', () => toggleBookStatus(index, status));

    card.appendChild(deleteButton);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(year);
    card.appendChild(status);
    card.appendChild(toggleStatusButton);

    return card;
}

function createLibrary() {
    const bookCardContainer = document.createElement('div');
    bookCardContainer.id = 'book-card-container';
    bookCardContainer.style.display = 'grid';
    bookCardContainer.style.gap = '1rem';
    bookCardContainer.style.gridTemplateColumns = 'repeat(auto-fill, minmax(300px, 1fr))';

    myBooks.forEach((book, index) => {
        const card = createBookCard(book, index);
        bookCardContainer.appendChild(card);
    });

    libraryBody.appendChild(bookCardContainer);
}

function addBookToLibrary(book) {
    const bookCardContainer = document.getElementById('book-card-container');
    const index = myBooks.indexOf(book); 
    const newBookCard = createBookCard(book, index);
    bookCardContainer.appendChild(newBookCard);
}

function refreshLibrary() {
    const bookCardContainer = document.getElementById('book-card-container');
    if (bookCardContainer) {
        bookCardContainer.remove();
    }
    createLibrary();
}

function deleteBookCard(index) {
    myBooks.splice(index, 1);
    refreshLibrary();
}

function toggleBookStatus(index, statusElement) {
    const book = myBooks[index];
    if (book.status === 'not read') {
        book.status = 'reading';
    } else if (book.status === 'reading') {
        book.status = 'read';
    } else {
        book.status = 'not read';
    }

    statusElement.textContent = book.status;
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
