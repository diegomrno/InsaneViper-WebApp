import { Router } from 'express';
import userRouter from './user.router';
import rfidcatcherRouter from './rfidcatcher.router';


// Export the base-router
const baseRouter = Router();

// Setup routers
baseRouter.use('/users', userRouter);
baseRouter.use('/rfid', rfidcatcherRouter);

// Export default.
export default baseRouter;
