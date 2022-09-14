import { IService } from '../interfaces/IService';
import { CarZodSchema, ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/errorsCatalog';

class ServiceCar implements IService<ICar> {
  private _car: IModel<ICar>;

  constructor(model: IModel<ICar>) {
    this._car = model;
  }

  public async create(obj: ICar): Promise<ICar> {
    const parsed = CarZodSchema.safeParse(obj);
    // console.log('parsed', parsed);
    const { success } = parsed;

    if (!success) throw parsed.error;
    return this._car.create(obj);
  }

  public async read(): Promise<ICar[]> { return this._car.read(); }

  public async readOne(_id: string): Promise<ICar | null> {
    const car = await this._car.readOne(_id);
    // console.log('car', car);

    if (!car) throw new Error(ErrorTypes.EntityNotFound);
    return car;
  }
}

export default ServiceCar;
