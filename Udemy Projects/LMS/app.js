'use strict';

//console.log(booksList);
const addBooks = document.querySelector('.bookAdd');
const bookUniqueNo = document.querySelector('.bookUniqueNo');
const bookTable = document.querySelector('.bookTable');
const bookNo = document.querySelector('.bookNo');
const btnAddBook = document.querySelector('.add-books');
//Buttons
addBooks.value = 'Nabaraj';
//ADD BOOKS

function reset() {
  addBooks.value = '';
  bookUniqueNo.value = '';
  bookTable.value = '';
  bookNo.value = '';
}
let booksList = [];
const add = function () {
  const booklist = {
    bookName: addBooks.value,
    BookNo: bookUniqueNo.value,
    tableNo: bookTable.value,
    noOfBooks: bookNo.value,
  };
  console.log('Books Added');
  booksList.push(booklist);
  //console.log(booksList);
  reset();
};
btnAddBook.addEventListener('click', add);
console.log(booksList);
