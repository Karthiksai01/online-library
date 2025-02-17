// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/browse">Browse Books</Link>
      <Link to="/add-book">Add Book</Link>
    </nav>
  );
};

export default Navbar;