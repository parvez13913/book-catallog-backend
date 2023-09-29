import { Category } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../sheard/catchAsync';
import sendResponse from '../../sheard/sendResponse';
import { CategoryService } from './category.service';

const createCategory = catchAsync(async (req: Request, res: Response) => {
  const { ...data } = req.body;
  const result = await CategoryService.createCategory(data);

  sendResponse<Category>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category Created Successfully!',
    data: result,
  });
});

export const CategoryController = {
  createCategory,
};
