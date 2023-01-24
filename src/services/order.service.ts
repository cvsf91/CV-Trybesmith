import model from '../models/orderModel';
import prodModel from '../models/productsModel';
import { Order } from '../utils/types';

const getOrders = async (): Promise<Order[]> => {
  const orders = await model.getAll();
  return orders;
};

const createOrder = async (userId: number, productsList: number[]) => {
  try {    
    const orderId = await model.insert(userId);
    await prodModel.updateOrderId(orderId, productsList);
    return orderId;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error);
    }
  }
};

export default { getOrders, createOrder };