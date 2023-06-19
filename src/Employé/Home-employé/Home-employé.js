import React from 'react';
import { useHistory } from 'react-router-dom';
import './Home-employé.css';

const HomeEmployee = () => {
  const history = useHistory();

  const handleLogout = () => {
    // Effectuer la déconnexion ici
    history.push('/Signup-employé'); // Rediriger vers la page de connexion
  };

  // Vous pouvez ajouter vos fonctions pour gérer les livres, les prêts et les membres ici

  return (
    <div className="home-employee-container">
      <h1 className="home-employee-title">Gestion de la bibliothèque</h1>
      <button className="home-employee-button" onClick={() => history.push('/ajouter-livre')}>Ajouter un livre</button>
      <button className="home-employee-button" onClick={() => history.push('/gerer-prets')}>Gérer les prêts</button>
      <button className="home-employee-button" onClick={() => history.push('/gerer-membres')}>Gérer les membres</button>
      <a className="logout-button" onClick={handleLogout}>Se déconnecter</a>
    </div>
  );
};

export default HomeEmployee;
