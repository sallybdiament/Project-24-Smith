import { Router } from 'express';
import ProductController from '../controllers/product.controllers';
// import authMiddleware from '../middlewares/auth.middleware';

const router = Router();

const productController = new ProductController(); // INSTANCIAR
// userController = objeto
// UserController = classe
// new = instanciar

router.get('/', productController.getAll.bind(productController));
router.post('/', productController.create.bind(productController));

export default router;