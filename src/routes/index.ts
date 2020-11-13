import { Router } from 'express';
import UserRouter from './Users';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/users', UserRouter);
router.use('')

// Export the base-router
export default router;
