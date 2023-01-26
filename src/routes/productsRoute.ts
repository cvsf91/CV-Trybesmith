import express from 'express';
import prodController from '../controllers/productsController';
import validateProdFields from '../middlewares/products/fieldsValidation';
import nameValidation from '../middlewares/products/nameValidation';
import amountValidation from '../middlewares/products/amountValidation';

const route = express.Router();

route.get(
  '/',
  prodController.listProducts,
);

route.post(
  '/',
  validateProdFields,
  nameValidation,
  amountValidation,
  prodController.createProduct,
);

export default route;