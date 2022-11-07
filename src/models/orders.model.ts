import { RowDataPacket } from 'mysql2/promise';
import mysql from './connection';
import { IOrder } from '../interfaces/IOrder';

export default class OrderModel {
  private connection = mysql; // atributo

  async getAll(): Promise<IOrder[]> {
    const [rows] = await this.connection.execute<IOrder[] & RowDataPacket[]>(`
      SELECT
        id, name, amount, orderId 
      FROM Trybesmith.Products
    `);

    return rows;
  }
}