import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './home-membres.css';

const Home = () => {
  const history = useHistory();

  const handleReset = () => {
    localStorage.clear();
    // ici, vous pouvez ajouter du code pour gérer d'autres actions après la réinitialisation
  };

  const handleLogoutMembre = () => {
    // Effectuer la déconnexion ici
    history.push('/Signup-membre'); // Rediriger vers la page de connexion
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Bienvenue dans la bibliothèque</h1>
      <Link to="/available-books">
        <button className="home-button">Voir les livres disponibles</button>
      </Link>
      <Link to="/books-to-return">
        <button className="home-button">Voir les livres à rendre</button>
      </Link>
      <button className="home-button" onClick={handleReset}>Réinitialiser la base de données</button>
      <a className="logout-button" onClick={handleLogoutMembre}>Se déconnecter</a>
    </div>
  );
}

export default Home;
