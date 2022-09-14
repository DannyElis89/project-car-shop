import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/handleError';
import routerCar from './routes/routesCar';

const app = express();

app.use(express.json());
app.use(routerCar);
app.use(errorHandler);

export default app;
