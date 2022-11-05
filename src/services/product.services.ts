// import Joi from 'joi';
// import { IMessage } from '../interfaces/IMessage';
import { IProduct } from '../interfaces/IProducts';
import ProductModel from '../models/product.models';

export default class ProductService {
  public product = new ProductModel(); // atributo

  public async getAll(): Promise<IProduct[]> {
    const products = await this.product.getAll();
    return products;
  }

  public create(productData: IProduct): Promise<IProduct> {
    // const newProductSchema = Joi.object({
    //   name: Joi.string().required().min(3),
    //   // .messages({ 
    //   //     'string.base': `"displayName" should be a type of 'text'`,
    //   //     'string.empty': `"displayName" cannot be an empty field`,
    //   //     'string.min': '"displayName" length must be at least 8 characters long',
    //   //     'any.required': `"displayName" is a required field` }),
    //   amount: Joi.string().required().min(2),
    // });
    // const { error } = newProductSchema.validate(productData);
    // if (error) return { type: 400, message: error.details[0].message };
    return this.product.create(productData);
  }
}