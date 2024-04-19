import React, { useState } from 'react';
import './BookList.css'
import './Search.css'

function BookList({ books }) {
    return (
      <div className="book-list-container">
        <ul className="book-list"> 
          {books.map((book, index) => (
            <li key={index} className="book-item">
              <div className="book-info">
                <h2 className="book-title">{book["Book-Title"]}</h2>
                <p>Author: {book["Book-Author"]}</p>
                <p>Year: {book["Year-Of-Publication"]}</p>
                <p>Publisher: {book.Publisher}</p>
                <p>ISBN: {book.ISBN}</p>
              </div>
              <img src={book["Image-URL-L"]} alt={book["Book-Title"]} className="book-image" />
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
function Search() {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`http://127.0.0.1:8000/search/${query}`);
            const data = await response.json();
            setBooks(data);
            console.log(data)
            setErrorMessage('');
        } catch (error) {
            setBooks([]);
            setErrorMessage('Failed to fetch books.');
        }
    };

    return (
        <div className="search-container">
            <div className="search-input-container"> 
                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Enter book title" /> {/* 使用 placeholder 属性添加提示信息 */}
                <button onClick={handleSearch}>Search</button>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <BookList books={books} />
        </div>
    );
}

export default Search;
