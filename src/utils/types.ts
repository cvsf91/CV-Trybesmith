export type Product = {
  id?: number,
  name: string,
  amount: number,
  orderId?: number,
};

export type User = {
  id?: number,
  userId?: number,
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

export type Payload = {
  data: {
    [key: string]: string | number,
  }
};

export type ProductIds = [ number, number, number ];