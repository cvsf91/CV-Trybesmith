import express from 'express';
import prodController from './controllers/productsController';
import userController from './controllers/userController';
import orderController from './controllers/orderController';
import validateFields from './middlewares/login/validateFields';
import validateLogin from './middlewares/login/validateLogin';

const app = express();

app.use(express.json());

app.post('/products', prodController.createProduct);

app.get('/products', prodController.listProducts);

app.post('/users', userController.createUser);

app.get('/orders', orderController.listOrders);

app.post(
  '/login',
  validateFields,
  validateLogin,
  userController.login,
);

export default app;
