import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BookController } from './book.controller';
import { BookValidations } from './book.validation';

const router = express.Router();

router.post(
  '/create-book',
  validateRequest(BookValidations.createBookZodSchema),
  BookController.createBook,
);

router.get('/:id/category', BookController.getBookByCategoryId);

router.get('/:id', BookController.getSingleBook);

router.patch(
  '/:id',
  validateRequest(BookValidations.updateBookZodSchema),
  BookController.updateBook,
);

router.delete('/:id', BookController.deleteBook);

router.get('/', BookController.getAllBooks);

export const BookRoutes = router;
