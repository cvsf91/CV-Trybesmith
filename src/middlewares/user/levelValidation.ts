import { Request, Response, NextFunction } from 'express';

export default async (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;
  console.log('LEVEL: ', level, typeof level);
  if (!level && level !== 0) {
    return res.status(400).json({ message: '"level" is required' });
  } if (typeof level !== 'number') {
    return res.status(422).json({ message: '"level" must be a number' });
  } if (level < 1) {
    return res.status(422)
      .json({ message: '"level" must be greater than or equal to 1' });
  }
  return next();
};