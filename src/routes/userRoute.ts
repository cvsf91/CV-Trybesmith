import express from 'express';
import usernameValidation from '../middlewares/user/usernameValidation';
import passwordValidation from '../middlewares/user/passwordValidation';
import levelValidation from '../middlewares/user/levelValidation';
import vocationValidation from '../middlewares/user/vocationValidation';
import userController from '../controllers/userController';

const route = express.Router();

route.post(
  '/',
  usernameValidation,
  passwordValidation,
  levelValidation,
  vocationValidation,
  userController.createUser,
);

export default route;