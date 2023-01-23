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

export default { getAll, insert };