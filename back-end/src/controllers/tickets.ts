import { getConnection } from 'typeorm';
import { Request, Response } from 'express';
import { Ticket } from '../entity/Ticket';

export const createTicket = async (req: Request, res: Response) => {
  let ticket = new Ticket();
  ticket = { ...req.body };

  const ticketRepository = getConnection().getRepository(Ticket);

  await ticketRepository.save(ticket);
  res.send(ticket);
};

export const getAllTicket = async (req: Request, res: Response) => {
  const ticketRepository = getConnection().getRepository(Ticket);

  const ticket = await ticketRepository.find();
  res.send(ticket);
};

export const getTicketById = async (req: Request, res: Response) => {
  const ticketRepository = getConnection().getRepository(Ticket);

  const ticket = await ticketRepository.findOne({
    where: { id: Number(req.params.id) }
  });

  res.send(ticket);
};

export const deleteTicketById = async (req: Request, res: Response) => {
  const ticketRepository = getConnection().getRepository(Ticket);

  const player = await ticketRepository.findOne({
    where: { id: Number(req.params.id) }
  });

  await ticketRepository.remove(player);

  res.send(`ticket with id ${req.params.id} has been deleted.`);
};
