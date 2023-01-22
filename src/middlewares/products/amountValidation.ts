import { Request, Response, NextFunction } from 'express';

export default async (req: Request, res: Response, next: NextFunction) => {
  const { amount } = req.body;
  if (typeof amount !== 'string') {
    return res.status(422).json({ message: '"amount" must be a string' });
  } if (amount.length < 3) {
    return res.status(422).json({ message: '"amount" length must be at least 3 characters long' });
  }
  return next();
};