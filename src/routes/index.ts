import { Router } from 'express';
import UserRouter from './Users';
import WeatherRouter from './Weather';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/users', UserRouter);
router.use('/weather',WeatherRouter)

// Export the base-router
export default router;
