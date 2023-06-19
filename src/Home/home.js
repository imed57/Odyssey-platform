import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Bienvenue dans la bibliothèque</h1>
      <Link to="/available-books">
        <button className="home-button">Voir les livres disponibles</button>
      </Link>
      <Link to="/books-to-return">
        <button className="home-button">Voir les livres à rendre</button>
      </Link>
    </div>
  );
}

export default Home;
