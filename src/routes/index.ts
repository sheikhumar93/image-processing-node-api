import { Router } from 'express';
import imageRoutes from './api/image';

const routes = Router();

routes.use('/', imageRoutes);

export default routes;
