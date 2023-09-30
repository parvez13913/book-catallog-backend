import express from 'express';
import { BookController } from './book.controller';

const router = express.Router();

router.post('/create-book', BookController.createBook);

router.get('/:id/category', BookController.getBookByCategoryId);

router.get('/:id', BookController.getSingleBook);

router.patch('/:id', BookController.updateBook);

router.delete('/:id', BookController.deleteBook);

router.get('/', BookController.getAllBooks);

export const BookRoutes = router;
