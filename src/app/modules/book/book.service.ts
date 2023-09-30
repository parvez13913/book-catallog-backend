import { IGenericResponse } from './../../../interfaces/common';
import { IPaginationOptions } from './../../../interfaces/pagination';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Book, Prisma } from '@prisma/client';
import { paginationHelpers } from '../../../helpers/paginationHelpers';
import prisma from '../../../sheard/prisma';
import { bookSearchableFields } from './book.constants';
import { IBookFilterableFields } from './book.interface';

const createBook = async (data: Book): Promise<Book> => {
  const result = await prisma.book.create({
    data,
    include: {
      category: true,
    },
  });

  return result;
};

const getAllBooks = async (
  filters: IBookFilterableFields,
  options: IPaginationOptions,
): Promise<IGenericResponse<Book[]>> => {
  const { search, category, ...filtersData } = filters;
  const { page, size, skip } = paginationHelpers.calculatePagination(options);

  const andConditions = [];

  if (search) {
    andConditions.push({
      OR: bookSearchableFields.map(fields => ({
        [fields]: {
          contains: search,
          mode: 'insensitive',
        },
      })),
    });
  }

  if (category) {
    andConditions.push({
      AND: [
        {
          category: {
            id: {
              equals: category,
            },
          },
        },
      ],
    });
  }

  if (Object.keys(filtersData).length > 0) {
    andConditions.push({
      AND: Object.keys(filtersData).map(key => ({
        [key]: {
          equals: (filtersData as any)[key],
        },
      })),
    });
  }

  const whereConditions: Prisma.BookWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.book.findMany({
    where: whereConditions,
    skip,
    take: size,
    orderBy:
      options.sortBy && options.sortOrder
        ? { [options.sortBy]: options.sortOrder }
        : { createdAt: 'desc' },
    include: {
      category: true,
    },
  });

  const total = await prisma.book.count({
    where: whereConditions,
  });

  const totalPage = Math.ceil(total / size);

  return {
    meta: {
      page,
      total,
      size,
      totalPage,
    },
    data: result,
  };
};

const getBookByCategoryId = async (
  id: string,
  options: IPaginationOptions,
): Promise<IGenericResponse<Book[]>> => {
  const { page, size, skip } = paginationHelpers.calculatePagination(options);
  const result = await prisma.book.findMany({
    where: {
      category: {
        id,
      },
    },
    skip,
    take: size,
    include: {
      category: true,
    },
  });

  const total = await prisma.book.count({
    where: {
      category: {
        id,
      },
    },
  });
  const totalPage = Math.ceil(total / size);

  return {
    meta: {
      page,
      size,
      total,
      totalPage,
    },
    data: result,
  };
};

const getSingleBook = async (id: string): Promise<Book | null> => {
  const result = await prisma.book.findUnique({
    where: {
      id,
    },
    include: {
      category: true,
    },
  });

  return result;
};

const updateBook = async (
  id: string,
  payload: Partial<Book>,
): Promise<Book | null> => {
  const result = await prisma.book.update({
    where: {
      id,
    },
    data: payload,
    include: {
      category: true,
    },
  });

  return result;
};

const deleteBook = async (id: string): Promise<Book | null> => {
  const result = await prisma.book.delete({
    where: {
      id,
    },
  });

  return result;
};

export const BookService = {
  createBook,
  getAllBooks,
  getBookByCategoryId,
  getSingleBook,
  updateBook,
  deleteBook,
};
