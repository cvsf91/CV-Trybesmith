import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const encode = (payload: object) => {
  const token = jwt.sign(
    { data: payload },
    process.env.JWT_SECRET as string,
    { algorithm: 'HS256', expiresIn: '1d' },
  );
  return token;
};

export const decode = (token: string) => {
  const payload = jwt.verify(
    token,
    process.env.JWT_SECRET as string,
    (err, decoded) => {
      if (err) {
        return { data: { message: 'Failed to decode token' } };
      }
      return decoded;
    },
  );
  
  return payload;
};