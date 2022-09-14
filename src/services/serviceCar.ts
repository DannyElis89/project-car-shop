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

    const result = this._car.create(obj);
    console.log('result', result);

    return result;
  }

  public async read(): Promise<ICar[]> { return this._car.read(); }

  public async readOne(_id: string): Promise<ICar | null> {
    const car = await this._car.readOne(_id);
    // console.log('car', car);

    if (!car) throw new Error(ErrorTypes.EntityNotFound);
    return car;
  }

  public async update(_id: string, obj: ICar): Promise<ICar | null> {
    const parsed = CarZodSchema.safeParse(obj);
    const { success } = parsed;
    // console.log('parsed', parsed);

    if (!success) throw parsed.error;
    await this.readOne(_id);

    return this._car.update(_id, obj);
  }

  public async delete(_id: string): Promise<ICar | null> {
    await this.readOne(_id);
    const car = await this._car.delete(_id);
    // console.log('car', car);

    return car;
  }
}

export default ServiceCar;
