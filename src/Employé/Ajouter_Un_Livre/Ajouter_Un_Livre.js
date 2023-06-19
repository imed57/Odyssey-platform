import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './Ajouter_Un_Livre.css';

const AjoutdesLivres = () => {
  const history = useHistory();
  const [tickets, settickets] = useState([]);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState('');
  const [link, setLink] = useState('');
  const [price, setPrice] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  const fetchtickets = () => {
    axios
      .get('http://localhost:4000/tickets')
      .then((res) => setTickets(res.data))
      .catch((error) => {
        console.error('Error while fetching tickets:', error);
      });
  };

  useEffect(() => {
    fetchtickets();
  }, []);

  const handleReturn = () => {
    history.push('/home-employé');
  };

  const handleAddticket = () => {
    const newticket = {
      date,
      name,
      date,
      image,
      link,
      price
    };

    axios
      .post('http://localhost:4000/tickets', newticket)
      .then((res) => {
        // ticket successfully added to the server
        // You can update the tickets state with the newly added ticket
        settickets(prevtickets => [...prevtickets, res.data]);
      })
      .catch((error) => {
        console.error('Error while adding the ticket:', error);
      });

    setName('');
    setDate('');
    setImage('');
    setLink('');
    setPrice('');
  };

  const handleDeleteticket = (id) => {
    axios
      .delete(`http://localhost:4000/tickets/${id}`)
      .then(() => {
        // ticket successfully deleted from the server
        // Remove the deleted ticket from the state
        const updatedtickets = tickets.filter((ticket) => ticket.id !== id);
        settickets(updatedtickets);
      })
      .catch((error) => {
        console.error('Error while deleting the ticket:', error);
      });
  };

  return (
    <div className="add-ticket-container">
      <h1 className="add-ticket-title">Ajouter un ticket</h1>
      <div className="add-ticket-form">
        <label>nom de l'evenement</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label>date de l'événement:</label>
        <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />

        <label>Image :</label>
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />

        <label>link :</label>
        <input type="text" value={link} onChange={(e) => setLink(e.target.value)} />

        <label>Price :</label>
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />

        <button className="add-ticket-button" onClick={handleAddticket}>
          Ajouter le ticket
        </button>
        <button className="add-ticket-button" onClick={handleReturn}>
          Retour
        </button>
      </div>

      <h2>Liste des tickets :</h2>
      <div className="slider">
        <div className="slider-container">
          {tickets.map((ticket, index) => (
            <div key={index} className={`ticket-item ${index === currentSlide ? 'active' : ''}`}>
              <img src={ticket.image} alt={ticket.name} className="ticket-card-image" />
              <h2 className="ticket-card-title">event: {ticket.name}</h2>
              <p className="ticket-card-author">date of event: {ticket.date}</p>
              <p className="ticket-card-author">link: {ticket.link}</p>
              <p className="ticket-card-author">prix: {ticket.price}€</p>
              <button
                className="ticket-card-button"
                onClick={() => handleDeleteticket(ticket.id)}
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
