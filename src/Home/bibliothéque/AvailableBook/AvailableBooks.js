import React, { useState, useEffect } from 'react';
import './AvailableBooks.css';
import TicketCard from '../Livre/BookCard';
import axios from 'axios';

export default function AvailableBooks() {
  const [data,setData] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:4000/tickets')
      .then((res) => setData(res.data));
    }, []);

  return (
    <div className='products'>
      {data.map((Ticket, index) => (
        <TicketCard Ticket={Ticket} key={index} />
      ))}
    </div>
  )
}

