import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './Gerer_Les_prêts.css';

const AjoutdesLivres = () => {
  const history = useHistory();
  const [loans, setloans] = useState([]);
  const [loanDate, setloanDate] = useState('');
  const [user_id, setuser_id] = useState('');
  const [book_id, setbook_id] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  const fetchBooks = () => {
    axios
      .get('http://localhost:4000/loans')
      .then((res) => setloans(res.data))
      .catch((error) => {
        console.error('Error while fetching books:', error);
      });
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleReturn = () => {
    history.push('/home-employé');
  };

  const handleAddBook = () => {
    const newloan = {
      loanDate,
      user_id,
      book_id
    };

    axios
      .post('http://localhost:4000/loans', newloan)
      .then((res) => {
        // Book successfully added to the server
        // You can update the books state with the newly added book
        setloans(prevBooks => [...prevBooks, res.data]);
      })
      .catch((error) => {
        console.error('Error while adding the book:', error);
      });

    setloanDate('');
    setuser_id('');
    setbook_id('');
  };

  const handleDeleteBook = (id) => {
    axios
      .delete(`http://localhost:4000/loans/${id}`)
      .then(() => {
        // Book successfully deleted from the server
        // Remove the deleted book from the state
        const updatedBooks = loans.filter((loan) => loan.id !== id);
        setloans(updatedBooks);
      })
      .catch((error) => {
        console.error('Error while deleting the book:', error);
      });
  };

  return (
    <div className="add-book-container">
      <h1 className="add-book-title">Ajouter un prêt</h1>
      <div className="add-book-form">
        <label>Nom de l'auteur :</label>
        <input type="text" value={loanDate} onChange={(e) => setloanDate(e.target.value)} />

        <label>Titre :</label>
        <input type="text" value={user_id} onChange={(e) => setuser_id(e.target.value)} />

        <label>Image :</label>
        <input type="text" value={book_id} onChange={(e) => setbook_id(e.target.value)} />

        <button className="add-book-button" onClick={handleAddBook}>
          Ajouter le livre
        </button>
        <button className="add-book-button" onClick={handleReturn}>
          Retour
        </button>
      </div>

      <h2>Liste des livres :</h2>
      <div className="slider">
        <div className="slider-container">
          {loans.map((loan, index) => (
            <div key={index} className={`book-item ${index === currentSlide ? 'active' : ''}`}>
              <h2 className="book-card-title">{loan.loanDate}</h2>
              <p className="book-card-id">ID: {loan.id}</p>
              <button
                className="book-card-button"
                onClick={() => handleDeleteBook(loan.id)}
                type="button"
              >
                Supprimer
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AjoutdesLivres;
