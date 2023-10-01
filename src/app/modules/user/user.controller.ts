import { User } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../sheard/catchAsync';
import pick from '../../../sheard/pick';
import sendResponse from '../../../sheard/sendResponse';
import { userFilterablefields } from './user.constants';
import { UserService } from './user.service';

const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, userFilterablefields);
  const options = pick(req.query, paginationFields);
  const result = await UserService.getAllUsers(filters, options);

  sendResponse<User[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users Featched Successfully!',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await UserService.getSingleUser(id);

  sendResponse<User>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Featched Successfully!',
    data: result,
  });
});

const updateUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;
  const result = await UserService.updateUser(id, payload);

  sendResponse<User>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Update Successfully!',
    data: result,
  });
});

const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await UserService.deleteUser(id);

  sendResponse<User>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Deleted Successfully!',
    data: result,
  });
});

export const UserController = {
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
