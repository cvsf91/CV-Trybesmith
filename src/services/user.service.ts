import { insert as create, getByUsername } from '../models/userModel';
import { User } from '../utils/types';

export const createUser = async (user: User): Promise<number> => {
  const insertId = await create(user);
  return insertId;
};

export const getUserByUsername = async (username: string): Promise<User> => {
  const user = await getByUsername(username);
  return user;
};
