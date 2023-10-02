import { User } from '@prisma/client';
import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { JwtHelpers } from '../../../helpers/jwtHelpers';
import prisma from '../../../sheard/prisma';
import { ISignInUser, ISignInUserResponse } from './auth.interface';

const createUser = async (data: User): Promise<User> => {
  const result = await prisma.user.create({
    data,
  });

  return result;
};

const SignInUser = async (
  payload: ISignInUser,
): Promise<ISignInUserResponse> => {
  const { email, password } = payload;
  const isUserExist = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not Exist');
  }
  if (!(isUserExist.password === password)) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect');
  }
  // access token && refresh token
  const { id, email: userEmail, role } = isUserExist;
  const token = JwtHelpers.createToken(
    { id, role, userEmail },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string,
  );

  const refreshToken = JwtHelpers.createToken(
    { id, role, userEmail },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string,
  );

  return {
    token,
    refreshToken,
  };
};

export const AuthService = {
  createUser,
  SignInUser,
};
