import { Book } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationFields } from '../../../constants/pagination';
import catchAsync from '../../../sheard/catchAsync';
import pick from '../../../sheard/pick';
import sendResponse from '../../../sheard/sendResponse';
import { bookFilterableFields } from './book.constants';
import { BookService } from './book.service';

const createBook = catchAsync(async (req: Request, res: Response) => {
  const { ...data } = req.body;
  const result = await BookService.createBook(data);

  sendResponse<Book>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book created successfully',
    data: result,
  });
});

const getAllBooks = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, bookFilterableFields);
  const options = pick(req.query, paginationFields);
  const result = await BookService.getAllBooks(filters, options);

  sendResponse<Book[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' Books fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getBookByCategoryId = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const options = pick(req.query, paginationFields);
  const result = await BookService.getBookByCategoryId(id, options);

  sendResponse<Book[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Books with associated category data fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleBook = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BookService.getSingleBook(id);

  sendResponse<Book>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book fetched successfully',
    data: result,
  });
});

const updateBook = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;
  const result = await BookService.updateBook(id, payload);

  sendResponse<Book>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book updated successfully',
    data: result,
  });
});

export const BookController = {
  createBook,
  getAllBooks,
  getBookByCategoryId,
  getSingleBook,
  updateBook,
};
