import { RowDataPacket, ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Product } from '../utils/types';

const getAll = async () => {
  const [products] = await connection.execute<RowDataPacket[]>('SELECT * FROM Trybesmith.products');
  return products;
};

const insert = async ({ name, amount }: Product): Promise<number> => {
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  return result.insertId;
};

export default { getAll, insert };