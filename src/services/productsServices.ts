import model from '../models/productsModel';
import { Product } from '../utils/types';

const getProducts = async (): Promise<Product[]> => {
  const products = await model.getAll();
  return products;
};

const createProduct = async (product: Product): Promise<number> => {
  const insertId = await model.insert(product);
  return insertId;
};

export default { getProducts, createProduct };