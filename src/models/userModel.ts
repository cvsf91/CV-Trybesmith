import { RowDataPacket, ResultSetHeader } from 'mysql2';
import connection from './connection';
import { User } from '../utils/types';

export const getAll = async () => {
  const [users] = await connection.execute<RowDataPacket[]>('SELECT * FROM Trybesmith.users');
  return users;
};

export const insert = async (
  { username, vocation, level, password }: User,
): Promise<number> => {
  const [result] = await connection.execute<ResultSetHeader>(
    `INSERT INTO Trybesmith.users
      (username, vocation, level, password)
    VALUES
      (?, ?, ?, ?)`,
    [username, vocation, level, password],
  );
  return result.insertId;
};
