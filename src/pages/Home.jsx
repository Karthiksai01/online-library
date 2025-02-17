// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Mystery', 'Biography'];
  const popularBooks = [
    { id: 1, title: 'Book 1', category: 'Fiction' },
    { id: 2, title: 'Book 2', category: 'Non-Fiction' },
  ];

  return (
    <div>
      <h1>Welcome to the Online Library</h1>
      <h2>Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
      <h2>Popular Books</h2>
      <ul>
        {popularBooks.map((book) => (
          <li key={book.id}>
            <Link to={`/books/${book.category}/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;