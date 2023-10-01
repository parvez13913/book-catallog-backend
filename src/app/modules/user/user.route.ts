import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';
import { UserValidations } from './user.validation';

const router = express.Router();

router.get('/:id', UserController.getSingleUser);

router.patch(
  '/:id',
  validateRequest(UserValidations.updateUserZodSchema),
  UserController.updateUser,
);

router.delete('/:id', UserController.deleteUser);

router.get('/', UserController.getAllUsers);

export const UserRoutes = router;
