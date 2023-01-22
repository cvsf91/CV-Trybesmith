import { Request, Response, NextFunction } from 'express';

export default async (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  if (typeof name !== 'string') {
    return res.status(422).json({ message: '"name" must be a string' });
  } if (name.length < 3) {
    return res.status(422).json({ message: '"name" length must be at least 3 characters long' });
  }
  return next();
};