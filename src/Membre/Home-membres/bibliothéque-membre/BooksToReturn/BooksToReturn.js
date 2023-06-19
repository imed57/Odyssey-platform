import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './BooksToReturn.css';
import BookCard from '../Livre/BookCard';

const BooksToReturn = () => {
  const location = useLocation();
  const [books, setBooks] = useState(() => {
    const localData = localStorage.getItem('booksToReturn');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    if (location.state) {
      setBooks(prevBooks => [...prevBooks, location.state.selectedBook]);
    }
  }, [location]);

  const handleReturnBook = (bookToReturn) => {
    setBooks(prevBooks => prevBooks.filter(book => book.id !== bookToReturn.id));
    // ici, vous pouvez ajouter le livre retourné à votre liste de livres disponibles
  };

  useEffect(() => {
    localStorage.setItem('booksToReturn', JSON.stringify(books));
  }, [books]);

  return (
    <div className="books-to-return-container">
      <h1 className="books-to-return-title">Livres à rendre</h1>
      {books.length > 0 ? (
        <div className="books-list">
          {books.map((book) => (
            <BookCard
              key={book.id}
              image={book.image}
              title={book.title}
              author={book.author}
              book={book}
              onReturn={handleReturnBook}
            />
          ))}
        </div>
      ) : (
        <p>Aucun livre à rendre pour le moment.</p>
      )}
      <Link to="/home-membres">
        <button className="books-to-return-button">Retour</button>
      </Link>
    </div>
  );
};

export default BooksToReturn;
