import { Router } from 'express';
import OrdersController from '../controllers/orders.controller';
// import authMiddleware from '../middlewares/auth.middleware';

const router = Router();

const ordersController = new OrdersController(); // INSTANCIAR

router.post('/', ordersController.getAll.bind(ordersController));

export default router;