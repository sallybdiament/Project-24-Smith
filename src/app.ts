import express from 'express';
import productRoutes from './routes/product.routes';
import userRoutes from './routes/user.routes';
import ordersRoutes from './routes/orders.routes';

const app = express();

app.use(express.json());

app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/orders', ordersRoutes);

export default app;
