import { RowDataPacket, ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Product } from '../utils/types';

const getAll = async (): Promise<Product[]> => {
  const [products] = await connection.execute<RowDataPacket[]>(
    'SELECT id, name, amount, order_id as orderId FROM Trybesmith.products',
  );
  return products as Product[];
};

const insert = async ({ name, amount, orderId }: Product): Promise<number> => {
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount, order_id) VALUES (?, ?, ?)',
    [name, amount, orderId || null],
  );
  return result.insertId;
};

const updateOrderId = async (orderId: number, productsList: number[]) => {
  try {
    const promises = productsList.map((productId: number) => connection.execute(
      `UPDATE Trybesmith.products
      SET order_id = ?
      WHERE id = ?`,
      [orderId, productId],
    ));
    await Promise.all(promises);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error);
    }
  }
};

export default { getAll, insert, updateOrderId };