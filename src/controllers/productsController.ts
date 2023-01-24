import { Request, Response } from 'express';
import service from '../services/products.service';

async function listProducts(_req: Request, res: Response) {
  const products = await service.getProducts();
  return res.status(200).json(products);
}

async function createProduct(req: Request, res: Response) {
  const id = await service.createProduct(req.body);
  return res.status(201).json({ id, ...req.body });
}

export default { createProduct, listProducts };