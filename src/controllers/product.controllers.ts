import { Request, Response } from 'express';
import ProductService from '../services/product.services';

export default class ProductController {
  public productService = new ProductService();

  async getAll(_req: Request, res: Response) {
    const products = await this.productService.getAll();

    res.status(200).json(products);
  }

  async create(req: Request, res: Response) {
    const product = req.body;
    const productCreated = await this.productService.create(product);
    return res.status(productCreated.type).json(productCreated.message);
  }
}