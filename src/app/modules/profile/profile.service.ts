import { User } from '@prisma/client';
import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { JwtHelpers } from '../../../helpers/jwtHelpers';
import prisma from '../../../sheard/prisma';

const getProfile = async (token: string): Promise<User> => {
  const isValidUser = JwtHelpers.verifiedToken(
    token,
    config.jwt.secret as Secret,
  );

  if (!isValidUser) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized');
  }

  const { id } = isValidUser;
  const isUserExist = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist !');
  }

  return isUserExist;
};

export const ProfileService = {
  getProfile,
};
