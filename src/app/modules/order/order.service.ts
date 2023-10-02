import { Secret } from 'jsonwebtoken';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Order } from '@prisma/client';
import httpStatus from 'http-status';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { JwtHelpers } from '../../../helpers/jwtHelpers';
import prisma from '../../../sheard/prisma';

const createOrder = async (data: any, token: string): Promise<Order> => {
  const isValidUser = JwtHelpers.verifiedToken(
    token,
    config.jwt.secret as Secret,
  );
  if (!isValidUser) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized');
  }

  const result = await prisma.order.create({
    data,
  });

  return result;
};

export const OrderService = {
  createOrder,
};
