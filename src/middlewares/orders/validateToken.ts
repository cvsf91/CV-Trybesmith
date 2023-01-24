import { Request, Response, NextFunction } from 'express';
import { decode } from '../../auth/jwt';
import { Payload } from '../../utils/types';

export default async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const { data } = decode(authorization as string) as unknown as Payload;
    if (!data.username) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.body.id = data.id;
    return next();    
  } catch (error) {
    console.log(error);
  }
};