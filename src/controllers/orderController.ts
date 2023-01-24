import { Request, Response } from 'express';
import service from '../services/order.service';

const listOrders = async (_req: Request, res: Response) => {
  const orders = await service.getOrders();
  return res.status(200).json(orders);
};

const createOrder = async (req: Request, res: Response) => {
  const { id, productsIds } = req.body;
  
  await service.createOrder(id, productsIds);
  return res.status(201).json({ userId: id, productsIds });
};

export default { listOrders, createOrder };