import { Request, Response, NextFunction } from 'express';

const minLengthMsg = (
  field: string,
  length: number,
) => `"${field}" length must be at least ${length} characters long`;

const levelMessage = '"level" must be greater than or equal to 1';

export default async (req: Request, res: Response, next: NextFunction) => {
  const { username, vocation, password, level } = req.body;
  if (username.length < 3) return res.status(422).json({ message: minLengthMsg('username', 3) });
  if (vocation.length < 3) return res.status(422).json({ message: minLengthMsg('vocation', 3) });
  if (level < 1) return res.status(422).json({ message: levelMessage });
  if (password.length < 8) return res.status(422).json({ message: minLengthMsg('password', 8) });
  return next();
};