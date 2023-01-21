export type Product = {
  id?: number,
  name: string,
  amount: number,
};

export type User = {
  username: string,
  vocation: string,
  level: number,
  password: string,
};

export type Order = {
  id: number,
  userId: number,
  productsIds: number[],
};
