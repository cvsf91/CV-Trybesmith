import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { Order } from '../utils/types';

const getAll = async () => {
  const [orders] = await connection.execute<RowDataPacket[]>(`
  SELECT O.id, O.user_id AS userId, JSON_ARRAYAGG(P.id) AS productsIds
  FROM Trybesmith.orders AS O
  INNER JOIN Trybesmith.products as P
  ON O.id = P.order_id
  GROUP BY O.id;
  `);
  return orders as Order[];
};

export default { getAll };
