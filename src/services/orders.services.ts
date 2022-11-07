import { IOrder } from '../interfaces/IOrder';
import OrderModel from '../models/orders.model';

export default class OrdersService {
  public orders = new OrderModel(); // atributo

  public async getAll(): Promise<IOrder[]> {
    const orders = await this.orders.getAll();
    return orders;
  }
}