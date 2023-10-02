import { Order } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import catchAsync from '../../../sheard/catchAsync';
import sendResponse from '../../../sheard/sendResponse';
import { OrderService } from './order.service';

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const { ...orderData } = req.body;
  const token = req.headers.authorization;

  if (!token) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized !');
  }

  const result = await OrderService.createOrder(orderData, token);

  sendResponse<Order>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order created successfully',
    data: result,
  });
});

const getAllOrders = catchAsync(async (req: Request, res: Response) => {
  const token = req.headers.authorization;
  const result = await OrderService.getAllOrders(token as string);

  if (!token) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized !');
  }

  sendResponse<Order[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Orders retrieved successfully',
    data: result,
  });
});

const getSingleOrder = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.params;

  const token = req.headers.authorization;
  const result = await OrderService.getSingleOrder(userId, token as string);

  if (!token) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized !');
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Orders retrieved successfully',
    data: result,
  });
});

export const OrderController = {
  createOrder,
  getAllOrders,
  getSingleOrder,
};
