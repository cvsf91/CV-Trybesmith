import { Request, Response } from 'express';
import { createUser as create, getUserByUsername } from '../services/user.service';
import { encode } from '../auth/jwt';

async function createUser(req: Request, res: Response) {
  try {
    await create(req.body);
    const user = await getUserByUsername(req.body.username);
    const token = encode(user);
    return res.status(201).json({ token });
  } catch (error) {
    console.log(error);
  }
}

async function login(req: Request, res: Response) {
  try {
    const token = encode(req.body);
    return res.status(200).json({ token });
  } catch (error) {
    console.log(error);
  }
}

export default { createUser, login };