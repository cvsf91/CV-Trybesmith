import { RowDataPacket } from 'mysql2';
import connection from './connection';

const getAll = async () => {
  const [users] = await connection.execute<RowDataPacket[]>('SELECT * FROM Trybesmith.users');
  return users;
};

export default { getAll };