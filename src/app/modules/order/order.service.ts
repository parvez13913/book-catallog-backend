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

const getAllOrders = async (token: string): Promise<Order[]> => {
  const isValidUser = JwtHelpers.verifiedToken(
    token,
    config.jwt.secret as Secret,
  );

  if (!isValidUser) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized');
  }

  let result = null;
  const { id, role } = isValidUser;
  const isUserExist = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist !');
  }

  if (isValidUser?.id === id && role === 'ADMIN') {
    result = await prisma.order.findMany({
      include: {
        user: true,
      },
    });
  } else if (isValidUser?.id === id && role === 'CUSTOMER') {
    result = await prisma.order.findMany({
      where: { userId: isValidUser?.id },
      include: {
        user: true,
      },
    });
  } else {
    throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden..');
  }

  return result;
};

export const OrderService = {
  createOrder,
  getAllOrders,
};
