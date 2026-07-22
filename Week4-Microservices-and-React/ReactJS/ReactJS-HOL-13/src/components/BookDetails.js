import React from 'react';
import { books } from '../data/books';

function BookDetails() {
  const bookList = books.map((book) => (
    <div key={book.id}>
      <h3>{book.bname}</h3>
      <h4>{book.price}</h4>
    </div>
  ));

  return (
    <div className="d2">
      <h1>Book Details</h1>
      <div className="booklet">
        {bookList}
      </div>
    </div>
  );
}

export default BookDetails;
