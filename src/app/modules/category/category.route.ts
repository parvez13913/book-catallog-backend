import express from 'express';
import { CategoryController } from './category.controller';

const router = express.Router();

router.post('/create-category', CategoryController.createCategory);

router.get('/:id', CategoryController.getSingleCategory);

router.patch('/:id', CategoryController.updateCategory);

router.get('/', CategoryController.getAllCategories);

router.delete('/:id', CategoryController.deleteCategory);

export const CategoryRoutes = router;
