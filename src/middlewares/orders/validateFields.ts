import { Request, Response, NextFunction } from 'express';

export default async (req: Request, res: Response, next: NextFunction) => {
  const { productsIds } = req.body;
  if (!productsIds && Array.isArray(productsIds) === false) {
    return res.status(400).json({
      message: '"productsIds" is required',
    });
  }
  const validate = Array.isArray(productsIds);
  if (!validate) {
    return res.status(422).json({
      message: '"productsIds" must be an array',
    });
  }
  if (!productsIds.length) {
    return res.status(422).json({
      message: '"productsIds" must include only numbers' });
  }
  return next();
};