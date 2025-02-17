// src/pages/BookDetailsPage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BookDetailsPage = () => {
  const { id } = useParams();
  const book = {
    id: 1,
    title: 'Book 1',
    author: 'Author 1',
    description: 'This is a great book!',
    rating: 4.5,
  };

  return (
    <div>
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>Description: {book.description}</p>
      <p>Rating: {book.rating}</p>
      <Link to="/browse">Back to Browse</Link>
    </div>
  );
};

export default BookDetailsPage;