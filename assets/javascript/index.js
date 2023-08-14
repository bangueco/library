// Books will be stored here in array

let library = [
  {title: 'Naruto Shippuden', author: 'Masashi Kishimoto', pages: 700, status: 'Not Read'}
]

const updateTable = function() {
  const booksInfoTable = document.querySelector('.books_table');
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
    actionDelete.classList.add('w-100');
  })
}

window.onload = function() {
  updateTable();
}