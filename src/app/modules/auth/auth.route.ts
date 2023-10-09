import express from 'express';
import { AuthController } from './auth.controller';

const router = express.Router();

router.post('/signup', AuthController.createUser);

router.post('/signin', AuthController.SignInUser);

router.post('/refresh-token', AuthController.refreshToken);

export const AuthRoutes = router;
