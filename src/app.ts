import express from 'express';
import controller from './controllers/productsController';

const app = express();

app.use(express.json());

app.post('/products', controller.createProduct);

export default app;
