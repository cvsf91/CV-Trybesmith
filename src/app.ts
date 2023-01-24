import express from 'express';
import prodController from './controllers/productsController';
import userController from './controllers/userController';
import orderController from './controllers/orderController';
import validateLoginFields from './middlewares/login/validateFields';
import validateLogin from './middlewares/login/validateLogin';
import validateProdFields from './middlewares/products/fieldsValidation';
import nameValidation from './middlewares/products/nameValidation';
import amountValidation from './middlewares/products/amountValidation';
import usernameValidation from './middlewares/user/usernameValidation';
import passwordValidation from './middlewares/user/passwordValidation';
import levelValidation from './middlewares/user/levelValidation';
import vocationValidation from './middlewares/user/vocationValidation';
import validateToken from './middlewares/orders/validateToken';
import validateFields from './middlewares/orders/validateFields';

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

app.post(
  '/users',
  usernameValidation,
  passwordValidation,
  levelValidation,
  vocationValidation,
  userController.createUser,
);

app.get('/orders', orderController.listOrders);

app.post(
  '/orders',
  validateToken,
  validateFields,
  orderController.createOrder,
);

app.post(
  '/login',
  validateLoginFields,
  validateLogin,
  userController.login,
);

export default app;
