import express from 'express';

import routes from './routes/index';

const app = express();

app.use(express.json());

app.use('/products', routes.productsRoute);
app.use('/login', routes.loginRoute);
app.use('/users', routes.userRoute);
app.use('/orders', routes.orderRoute);

export default app;
