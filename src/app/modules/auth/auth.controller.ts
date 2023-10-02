import { User } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import config from '../../../config';
import catchAsync from '../../../sheard/catchAsync';
import sendResponse from '../../../sheard/sendResponse';
import { ISignInUserResponse } from './auth.interface';
import { AuthService } from './auth.service';

const createUser = catchAsync(async (req: Request, res: Response) => {
  const { ...data } = req.body;
  const result = await AuthService.createUser(data);

  sendResponse<User>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Created Successfully!',
    data: result,
  });
});

const SignInUser = catchAsync(async (req: Request, res: Response) => {
  const { ...signInData } = req.body;
  const result = await AuthService.SignInUser(signInData);
  const { refreshToken } = result;
  // Set refreshToken into browser cookie
  const cookieOptions = {
    secure: config.env === 'production',
    httpOnly: true,
  };

  res.cookie('refreshToken', refreshToken, cookieOptions);

  sendResponse<ISignInUserResponse>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User signin successfully!',
    data: result,
  });
});

export const AuthController = {
  createUser,
  SignInUser,
};
