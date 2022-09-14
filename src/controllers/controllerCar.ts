import { Request, Response } from 'express';
import { IService } from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';

class CarController {
  constructor(private _service: IService<ICar>) {}

  public async create(
    req: Request & { body: ICar },
    res: Response<ICar>,
  ) {
    const { body } = req;
    const result = await this._service.create(body);
    // console.log('result', result);

    return res.status(201).json(result);
  }

  public async read(
    req: Request,
    res: Response<ICar[]>,
  ) {
    const result = await this._service.read();
    // console.log('result', result);

    return res.status(200).json(result);
  }

  public async readOne(req: Request, res: Response<ICar | null>) {
    const { id } = req.params;
    // console.log('id', id);

    const result = await this._service.readOne(id);

    return res.status(200).json(result);
  }
}

export default CarController;
