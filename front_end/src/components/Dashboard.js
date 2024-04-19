import React, { useState } from 'react';
import './BookList.css'

function BookList({ books }) {
  return (
    <div className="book-list-container">
      <ul className="book-list">
        {books.map((book, index) => (
          <li key={index} className="book-item">
            <div className="book-info"> 
              <h2 className="book-title">{book.Title}</h2> 
              <p>Author: {book.Author}</p>
              <p>Year: {book.Year}</p>
              <p>Publisher: {book.Publisher}</p>
              <p>Rating: {book.Rating}</p>
              <p>Count: {book.Count}</p>
            </div>
            <img src={book.URL} alt={book.Title} className="book-image" />
          </li>
        ))}
      </ul>
    </div>
  );
}

function BookSearch() {
  const [userId, setUserId] = useState('');
  const [number, setNumber] = useState('');
  const [books, setBooks] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // get top N recommendations for the user
    const response = await fetch(`http://127.0.0.1:8000/${userId}/ratings/top/${number}`);
    const data = await response.json();
    setBooks(data);
  };

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter User ID"
          className="search-input"
        />
        <input
          type="number"
          value={number}
          min="0" 
          max="10"
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Top N"
          className="search-input"
        />
        <button onClick={handleSubmit} className="search-button">Recommend</button>
      </div>

      <BookList books={books} />
    </div>
  );
}

export default BookSearch;
