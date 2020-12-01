import { Router } from 'express';
import ExempleController from '../controllers/ExempleController';

const routes = Router();
const exempleController = new ExempleController();

routes.use('/alive', exempleController.create);

export default routes;
