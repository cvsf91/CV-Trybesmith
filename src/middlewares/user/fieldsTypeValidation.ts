import { Request, Response, NextFunction } from 'express';

const stringsMsg = (field: string) => `"${field}" must be a string`;

export default async (req: Request, res: Response, next: NextFunction) => {
  const { username, vocation, password, level } = req.body;
  if (typeof username !== 'string') {
    return res.status(422).json({ message: stringsMsg('username') });
  }
  if (typeof vocation !== 'string') {
    return res.status(422).json({ message: stringsMsg('vocation') });
  }
  if (typeof password !== 'string') {
    return res.status(422).json({ message: stringsMsg('password') });
  }
  if (typeof level !== 'number') {
    return res.status(422).json({ message: '"level" must be a number' });
  }
  return next();
};