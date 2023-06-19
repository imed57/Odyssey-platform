import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './AvailableBooks.css';
import BookCard from '../Livre/BookCard';

import bleachImage from '../Livre/Image_Livre/Bleach.png';
import titeufImage from '../Livre/Image_Livre/Titeuf.png';
import spirouImage from '../Livre/Image_Livre/Spirou.png';

const AvailableBooks = () => {
  const initialBooks = [
    {
      id: 1,
      image: bleachImage,
      title: 'Bleach',
      author: 'Auteur 1'
    },
    {
      id: 2,
      image: titeufImage,
      title: 'Titeuf',
      author: 'Auteur 2'
    },
    {
      id: 3,
      image: spirouImage,
      title: 'Spirou',
      author: 'Auteur 3'
    },
    // Ajoutez d'autres livres ici
  ];

  const history = useHistory();
  const [availableBooks, setAvailableBooks] = useState(initialBooks);

  const handleBookClick = (book) => {
    // Déplacer le livre dans le fichier correspondant
    setAvailableBooks(prevBooks => prevBooks.filter(prevBook => prevBook.id !== book.id));

    // Rediriger vers 'books-to-return' avec l'objet du livre
    history.push({
      pathname: '/books-to-return',
      state: { selectedBook: book }
    });
  };

  return (
    <div className="available-books-container">
      <h1 className="available-books-title">Livres disponibles</h1>
      <div className="available-books-list">
        {availableBooks.map((book) => (
          <BookCard
            key={book.id}
            image={book.image}
            title={book.title}
            author={book.author}
            book={book}
            fromAvailableBooks={true}
            onConfirm={() => handleBookClick(book)}
          />
        ))}
      </div>

      <Link to="/home-membres">
        <button className="available-books-button">Retour</button>
      </Link>
    </div>
  );
}

export default AvailableBooks;
