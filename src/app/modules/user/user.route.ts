import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';
import { UserValidations } from './user.validation';

const router = express.Router();

router.get('/:id', auth(ENUM_USER_ROLE.ADMIN), UserController.getSingleUser);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(UserValidations.updateUserZodSchema),
  UserController.updateUser,
);

router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), UserController.deleteUser);

router.get('/', auth(ENUM_USER_ROLE.ADMIN), UserController.getAllUsers);

export const UserRoutes = router;
