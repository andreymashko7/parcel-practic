const BASE_URL = 'http://localhost:4040';

const book = {
   
}



function addBook(book) {
    const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'aplication/json',
    },
    body: JSON.stringify(book),
    }
   return  fetch('${BASE_URL}/books', options).then(res=> res.json())
}


addBook({
     title: 'js'
}).then(book => console.log(book))