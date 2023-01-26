import express from 'express';
import validateLogin from '../middlewares/login/validateLogin';
import validateLoginFields from '../middlewares/login/validateFields';
import userController from '../controllers/userController';

const route = express.Router();

route.post(
  '/',
  validateLoginFields,
  validateLogin,
  userController.login,
);

export default route;