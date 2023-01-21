import { Request, Response } from 'express';
import service from '../services/userService';
import { encode } from '../auth/jwt';

async function createUser(req: Request, res: Response) {
  try {
    await service.createUser(req.body);
    const token = encode(req.body);  
    return res.status(201).json({ token });
  } catch (error) {
    console.log(error);
  }
}

export default { createUser };