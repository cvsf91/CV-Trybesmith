import { Request, Response } from 'express';
import service from '../services/productsServices';

async function createProduct(req: Request, res: Response): Promise<Response> {
  const id = await service.createProduct(req.body);
  return res.status(201).json({ id, ...req.body });
}

export default { createProduct };