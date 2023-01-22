import express from 'express';
import prodController from './controllers/productsController';
import userController from './controllers/userController';
import orderController from './controllers/orderController';
import validateLoginFields from './middlewares/login/validateFields';
import validateLogin from './middlewares/login/validateLogin';
import validateProdFields from './middlewares/products/fieldsValidation';
import nameValidation from './middlewares/products/nameValidation';
import amountValidation from './middlewares/products/amountValidation';

const app = express();

app.use(express.json());

app.post(
  '/products',
  validateProdFields,
  nameValidation,
  amountValidation,
  prodController.createProduct,
);

app.get('/products', prodController.listProducts);

app.post('/users', userController.createUser);

app.get('/orders', orderController.listOrders);

app.post(
  '/login',
  validateLoginFields,
  validateLogin,
  userController.login,
);

export default app;
