import { Request, Response, NextFunction } from 'express';

const msg = (field: string) => `"${field}" is required`;
export default (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  if (!username) return res.status(400).json({ message: msg('username') });
  if (!password) return res.status(400).json({ message: msg('password') });
  return next();
};