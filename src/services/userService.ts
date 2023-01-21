import { insert as create } from '../models/userModel';
import { User } from '../utils/types';

const createUser = async (user: User): Promise<number> => {
  const insertId = await create(user);
  return insertId;
};

export default { createUser };