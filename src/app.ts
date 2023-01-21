import express from 'express';
import prodController from './controllers/productsController';
import userController from './controllers/userController';

const app = express();

app.use(express.json());

app.post('/products', prodController.createProduct);

app.get('/products', prodController.listProducts);

app.post('/users', userController.createUser);

export default app;
