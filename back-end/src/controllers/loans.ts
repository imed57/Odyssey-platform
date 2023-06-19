import { getConnection } from 'typeorm';
import { Request, Response } from 'express';
import { Loan } from '../entity/Loan';

export const createLoan = async (req: Request, res: Response) => {
  let loan = new Loan();
  loan = { ...req.body };

  const loanRepository = getConnection().getRepository(Loan);

  await loanRepository.save(loan);
  res.send(loan);
};

export const getAllLoans = async (req: Request, res: Response) => {
  const loanRepository = getConnection().getRepository(Loan);

  const loans = await loanRepository.find();
  res.send(loans);
};

export const getLoanById = async (req: Request, res: Response) => {
  const loanRepository = getConnection().getRepository(Loan);

  const loan = await loanRepository.findOne({
    where: { id: Number(req.params.id) }
  });

  res.send(loan);
};


export const deleteLoanById = async (req: Request, res: Response) => {
  const loanRepository = getConnection().getRepository(Loan);

  const loan = await loanRepository.findOne({
    where: { id: Number(req.params.id) }
  });

  await loanRepository.remove(loan);

  res.send(`Loan with id ${req.params.id} has been deleted.`);
};
