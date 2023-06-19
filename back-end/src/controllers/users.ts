import { getConnection } from 'typeorm';
import { Request, Response } from 'express';
import { User } from '../entity/User';

export const createUser = async (req: Request, res: Response) => {
  let user = new User();
  user = { ...req.body };

  const userRepository = getConnection().getRepository(User);

  await userRepository.save(user);
  res.send(user);
};

export const getAllUsers = async (req: Request, res: Response) => {
  const userRepository = getConnection().getRepository(User);

  const users = await userRepository.find();
  res.send(users);
};

export const getUserById = async (req: Request, res: Response) => {
  const userRepository = getConnection().getRepository(User);

  const user = await userRepository.findOne({
    where: { id: Number(req.params.id) }
  });

  res.send(user);
};

export const updateUserById = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const userRepository = getConnection().getRepository(User);

  await userRepository.update(Number(req.params.id), {
    name,
    email,
    password
  });

  const updateduser = await userRepository.findOne({
    where: { id: Number(req.params.id) }
  });

  res.send(updateduser);
};

export const deleteUserById = async (req: Request, res: Response) => {
  const userRepository = getConnection().getRepository(User);

  const user = await userRepository.findOne({
    where: { id: Number(req.params.id) }
  });

  await userRepository.remove(user);

  res.send(`user with id ${req.params.id} has been deleted.`);
};
