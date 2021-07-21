import { Router } from 'express';
import addressMiddleware from './api/components/address/routes/address.routes';

const routes = Router();

routes.use('/api/address', addressMiddleware);

export default routes;