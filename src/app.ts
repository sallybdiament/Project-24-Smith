import express from 'express';
import 'express-async-errors';
import productRoutes from './routes/product.routes';
import userRoutes from './routes/user.routes';
import ordersRoutes from './routes/orders.routes';
import loginRoutes from './routes/login.routes';
import httpErrorMiddleware from './middlewares/error.middleware';

const app = express();

app.use(express.json());

app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/orders', ordersRoutes);
app.use('/login', loginRoutes);

app.use(httpErrorMiddleware);

export default app;
