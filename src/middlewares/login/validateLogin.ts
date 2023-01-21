import { Request, Response, NextFunction } from 'express';
import { getUserByUsername } from '../../services/userService';

const message = 'Username or password invalid';

export default async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  const user = await getUserByUsername(username);
  if (!user) return res.status(401).json({ message });
  if (user.password !== password) return res.status(401).json({ message });
  req.body.id = user.id;
  delete req.body.password;
  return next();
};