import { User } from '@prisma/client';
import prisma from '../../../sheard/prisma';

const createUser = async (data: User): Promise<User> => {
  const result = await prisma.user.create({
    data,
  });

  return result;
};

export const AuthService = {
  createUser,
};
