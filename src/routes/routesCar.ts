import { Router, Request, Response } from 'express';
import ControllerCar from '../controllers/controllerCar';
import ModelCar from '../models/modelCar';
import ServiceCar from '../services/serviceCar';

const route = Router();

const car = new ModelCar();
const serviceCar = new ServiceCar(car);
const controllerCar = new ControllerCar(serviceCar);

route.post('/cars', (req: Request, res: Response) => controllerCar.create(req, res));

route.get('/cars', (req: Request, res: Response) => controllerCar.read(req, res));

route.get('/cars/:id', (req: Request, res: Response) => controllerCar.readOne(req, res));

route.put('/cars/:id', (req: Request, res: Response) => controllerCar.update(req, res));

route.delete('/cars/:id', (req: Request, res: Response) => controllerCar.delete(req, res));

export default route;
