import { OrderStatus } from '@prisma/client';
import { z } from 'zod';

const createOrderZodSchema = z.object({
  body: z.object({
    status: z.enum(
      [OrderStatus.DELIVERED, OrderStatus.PENDING, OrderStatus.SHIPPED] as [
        string,
        ...string[],
      ],
      {
        required_error: 'Status is Required',
      },
    ),
    userId: z.string({
      required_error: 'User id is required',
    }),
    orderedBooks: z.array(
      z.object({
        bookId: z.string({ required_error: 'Book id is required' }),
        quantity: z.number({ required_error: 'Quantity is required' }),
      }),
    ),
  }),
});

export const OrderValidation = {
  createOrderZodSchema,
};
