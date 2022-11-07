import Joi from 'joi';
import { IMessage } from '../interfaces/IMessage';
import { IProduct } from '../interfaces/IProducts';
import ProductModel from '../models/product.models';

export default class ProductService {
  public product = new ProductModel(); // atributo

  public async getAll(): Promise<IProduct[]> {
    const products = await this.product.getAll();
    return products;
  }

  public create(productData: IProduct): IMessage | Promise<IProduct> {
    const newProductSchema = Joi.object({
      name: Joi.string().required().min(3),
      amount: Joi.string().required().min(2),
    }).messages({ 
      'string.base': '{{#label}} should be a type of \'text\'',
      'string.empty': '{{#label}} cannot be an empty field',
      'string.min': '{{#label}} length must be at least 8 characters long',
      'any.required': '{{#label}} is a required field' });
    const { error } = newProductSchema.validate(productData);
    if (error) return { message: error.details[0].message };
    return this.product.create(productData);
  }
}