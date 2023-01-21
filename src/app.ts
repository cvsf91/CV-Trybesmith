import express from 'express';
import prodController from './controllers/productsController';
import userController from './controllers/userController';
import orderController from './controllers/orderController';

const app = express();

app.use(express.json());

app.post('/products', prodController.createProduct);

app.get('/products', prodController.listProducts);

app.post('/users', userController.createUser);

app.get('/orders', orderController.listOrders);

export default app;
