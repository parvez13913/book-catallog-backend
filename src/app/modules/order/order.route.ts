import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { OrderController } from './order.controller';
import { OrderValidation } from './order.validation';

const router = express.Router();

router.post(
  '/create-order',
  auth(ENUM_USER_ROLE.CUSTOMER),
  validateRequest(OrderValidation.createOrderZodSchema),
  OrderController.createOrder,
);

router.get('/', auth(ENUM_USER_ROLE.ADMIN), OrderController.getAllOrders);

export const OrderRoutes = router;
