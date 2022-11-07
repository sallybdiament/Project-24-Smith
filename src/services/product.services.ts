import Joi from 'joi';
// import { IMessage } from '../interfaces/IMessage';
import { IProduct } from '../interfaces/IProducts';
import ProductModel from '../models/product.models';

export default class ProductService {
  public product = new ProductModel(); // atributo

  public async getAll(): Promise<IProduct[]> {
    const products = await this.product.getAll();
    return products;
  }

  public create(productData: IProduct) {
    const newProductSchema = Joi.object({
      name: Joi.string().required().min(3),
      amount: Joi.string().required().min(2),
    }).messages({ 
      'string.base': '{{#label}} must be a string',
      'string.empty': '{{#label}} is required',
      'string.min': '{{#label}} length must be at least 3 characters long',
      'any.required': '{{#label}} is required' });
    const { error } = newProductSchema.validate(productData);
    if (error) { 
      if (error.details[0].type === 'string.empty') {
        return { type: 400, message: error.details[0].message }; 
      }
      return { type: 422, message: error.details[0].message };
    }
    return { type: 201, message: this.product.create(productData) };
  }
}