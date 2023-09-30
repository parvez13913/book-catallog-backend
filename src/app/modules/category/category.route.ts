import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CategoryController } from './category.controller';
import { CategoryValidations } from './category.validation';

const router = express.Router();

router.post(
  '/create-category',
  validateRequest(CategoryValidations.createCategoryZodSchema),
  CategoryController.createCategory,
);

router.get('/:id', CategoryController.getSingleCategory);

router.patch(
  '/:id',
  validateRequest(CategoryValidations.updateCategoryZodSchema),
  CategoryController.updateCategory,
);

router.get('/', CategoryController.getAllCategories);

router.delete('/:id', CategoryController.deleteCategory);

export const CategoryRoutes = router;
