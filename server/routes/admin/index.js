import express  from 'express';
import category from './category';
import settings from './settings';

let adminRouter = express.Router();

adminRouter.use('/category', category);
adminRouter.use('/settings', settings);
export default adminRouter;