import { RowDataPacket } from 'mysql2/promise';
import mysql from './connection';
import { IOrder } from '../interfaces/IOrder';

export default class OrderModel {
  private connection = mysql; // atributo

  async getAll(): Promise<IOrder[]> {
    const [rows2] = await this.connection.execute<IOrder[] & RowDataPacket[]>(
      `SELECT products.orderId as id, orders.userId, JSON_ARRAYAGG(products.id) AS productsIds
    FROM Trybesmith.Products as products 
    INNER JOIN Trybesmith.Orders AS orders ON products.orderId = orders.id
    GROUP BY products.orderId`,

    );
    console.log(rows2);
    return rows2;
  }
}