import { Router } from 'express';
import UserController from '../controllers/user.controller';
// import authMiddleware from '../middlewares/auth.middleware';

const router = Router();

const userController = new UserController(); // INSTANCIAR

router.post('/', userController.create.bind(userController));

export default router;