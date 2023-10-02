import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { BookController } from './book.controller';
import { BookValidations } from './book.validation';

const router = express.Router();

router.post(
  '/create-book',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(BookValidations.createBookZodSchema),
  BookController.createBook,
);

router.get('/:id/category', BookController.getBookByCategoryId);

router.get('/:id', BookController.getSingleBook);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(BookValidations.updateBookZodSchema),
  BookController.updateBook,
);

router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), BookController.deleteBook);

router.get('/', BookController.getAllBooks);

export const BookRoutes = router;
