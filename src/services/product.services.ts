import { IProduct } from '../interfaces/IProducts';
import ProductModel from '../models/product.models';

export default class ProductService {
  public product = new ProductModel(); // atributo

  public async getAll(): Promise<IProduct[]> {
    const products = await this.product.getAll();
    return products;
  }

  public create(productData: IProduct): Promise<IProduct> {
    return this.product.create(productData);
  }
}