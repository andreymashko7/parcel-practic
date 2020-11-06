const BASE_URL = 'http://localhost:4040';

function fetchBooks() {
 return fetch('${BASE_URL}/books')
    .then(res => res.json())
    .then(console.log)
}

function fetchBookById(bookId) {
     return fetch('${BASE_URL}/books/${bookId}')
    .then(res => res.json())
    .then(console.log)
}

fetchBooks();
fetchBookById(2);