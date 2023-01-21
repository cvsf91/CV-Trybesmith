import model from '../models/orderModel';
import { Order } from '../utils/types';

const getOrders = async (): Promise<Order[]> => {
  const orders = await model.getAll();
  return orders;
};

export default { getOrders };