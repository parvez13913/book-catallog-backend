import { User } from '@prisma/client';
import prisma from '../../sheard/prisma';

const createUser = async (data: User): Promise<User> => {
  const result = await prisma.user.create({
    data,
  });

  return result;
};

const getAllUsers = async (): Promise<User[]> => {
  const result = await prisma.user.findMany({});
  return result;
};

export const UserService = {
  createUser,
  getAllUsers,
};
