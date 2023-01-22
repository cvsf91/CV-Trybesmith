import { Request, Response, NextFunction } from 'express';

const msg = (field: string) => `"${field}" is required`;

export default async (req: Request, res: Response, next: NextFunction) => {
  const { username, vocation, level, password } = req.body;
  if (!username) return res.status(400).json({ message: msg('username') });
  if (!vocation) return res.status(400).json({ message: msg('vocation') });
  if (!level) return res.status(400).json({ message: msg('level') });
  if (!password) return res.status(400).json({ message: msg('password') });
  return next();
};
