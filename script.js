const library = document. getElementById("main");
const libraryBooks = [
    {title: "To Kill A Mockingbird", author: "Harper Lee", pages: 281, year: 1960, status: read},
    {title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 110, year: 1925, status: reading},
];



function Book(title, author, pages, year, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.year = year;
    this.status = status;
}

function createBookCard(){
    const card = document.createElement("div");
    const title = document.createElement("h2");
    const author = document.createElement("h3");
    const pages = document.createElement("h3");
    const year = document.createElement("p");
    const status = document.createElement("p");

    card.className = "book-card";
    title.className = "book-title";
    author.className = "book-author";
    pages.className = "book-pages";
    year.className = "book-year";
    status.className = "book-status";

    card.appendChild(status, title, author, pages, year);

    return card;
}

function addBookToLibrary() {
}
