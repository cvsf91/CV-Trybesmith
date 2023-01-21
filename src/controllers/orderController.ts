import { Request, Response } from 'express';
import service from '../services/orderService';

const listOrders = async (_req: Request, res: Response) => {
  const orders = await service.getOrders();
  return res.status(200).json(orders);
};

export default { listOrders };