import { UserRole } from '@prisma/client';
import { z } from 'zod';

const updateUserZodSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().email().optional(),
    password: z.string().optional(),
    role: z
      .enum([UserRole.admin, UserRole.customer] as [string, ...string[]])
      .optional(),
    contactNo: z.string().optional(),
    address: z.string().optional(),
    profileImg: z.string().optional(),
  }),
});

export const UserValidations = {
  updateUserZodSchema,
};
