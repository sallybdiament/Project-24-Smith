import { Router } from 'express';
import LoginController from '../controllers/login.controller';
// import authMiddleware from '../middlewares/auth.middleware';

const router = Router();

const loginController = new LoginController(); // INSTANCIAR

router.post('/', loginController.login.bind(loginController));

export default router;