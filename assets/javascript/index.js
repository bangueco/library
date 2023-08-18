// Books will be stored here in array

let library = [
  {title: 'Naruto Shippuden', author: 'Masashi Kishimoto', pages: 700, status: 'Not Read'},
  {title: 'Berserk', author: 'Ban Gueco', pages: 666, status: 'Not Read'},
  {title: 'One Piece', author: 'Oda?', pages: 2000, status: 'Not Read'}
]

// Object constructor for books

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

// Add book to array list
document.querySelector('.add-book').addEventListener('click', function addBookToLibrary(e)
{
  // Query selectors to get input values
  const bookTitle = document.querySelector('#book_title').value;
  const bookAuthor = document.querySelector('#book_author').value;
  const bookPages = document.querySelector('#book_pages').value;
  const bookStatus = document.querySelector("#book_status").value;

  library.push(new Book(bookTitle, bookAuthor, parseInt(bookPages), bookStatus));
  updateTable();
  e.preventDefault();
});

// Update/Add table items from array

const updateTable = function() {
  const booksInfoTable = document.querySelector('.books_table');
  document.querySelector('.books_table').innerHTML = "" // Avoid html element duplications
  let bookID = 0; // Just like array id will start from 0
  library.forEach(book => {
    // Create elements
    const tableRow = document.createElement('tr');
    const bookTitle = document.createElement('td');
    const bookAuthor = document.createElement('td');
    const bookPages = document.createElement('td');
    const bookStatus = document.createElement('td');
    const bookDelete = document.createElement('td');
    const actionDelete = document.createElement('button');
    // Append tableRow to tbody in html
    booksInfoTable.appendChild(tableRow);
    // Append all table data into tableRow
    tableRow.appendChild(bookTitle);
    tableRow.appendChild(bookAuthor);
    tableRow.appendChild(bookPages);
    tableRow.appendChild(bookStatus);
    tableRow.appendChild(bookDelete);
    bookDelete.appendChild(actionDelete);
    // Assign values on every table data
    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookPages.textContent = book.pages;
    bookStatus.textContent = book.status;
    actionDelete.textContent = 'Delete';
    // Class related
    actionDelete.classList.add('btn');
    actionDelete.classList.add('btn-danger');
    actionDelete.classList.add('delete-btn');
    actionDelete.classList.add('w-100');
    // Attribute related
    tableRow.setAttribute('data-book-id', bookID);
    bookID++;
    // Delete button for books event listener
    actionDelete.addEventListener('click', function(e) {
      library.splice(e.target.parentNode.parentNode.dataset.bookId, 1);
      updateTable();
    })
  })
};

window.onload = function() {
  // Show list of books based on array list
  updateTable();
};