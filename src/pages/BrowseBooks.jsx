// src/pages/BrowseBooks.js
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

const BrowseBooks = () => {
  const { category } = useParams();
  const [books, setBooks] = useState([
    { id: 1, title: 'Book 1', author: 'Author 1', category: 'Fiction' },
    { id: 2, title: 'Book 2', author: 'Author 2', category: 'Non-Fiction' },
  ]);

  const filteredBooks = category ? books.filter((book) => book.category === category) : books;

  const handleSearch = (query) => {
    const results = books.filter(
      (book) =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
    );
    setBooks(results);
  };

  return (
    <div>
      <h1>Browse Books</h1>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            <Link to={`/books/${book.category}/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrowseBooks;