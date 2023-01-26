import express from 'express';
import validateToken from '../middlewares/orders/validateToken';
import validateFields from '../middlewares/orders/validateFields';
import orderController from '../controllers/orderController';

const route = express.Router();

route.get('/', orderController.listOrders);

route.post(
  '/',
  validateToken,
  validateFields,
  orderController.createOrder,
);

export default route;