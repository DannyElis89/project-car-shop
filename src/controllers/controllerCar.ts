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

  public async update(req: Request, res: Response<ICar | null>) {
    const { params, body } = req;

    const result = await this._service.update(params.id, body);
    // console.log('result', result);

    return res.status(200).json(result);
  }

  public async delete(req: Request, res: Response<ICar | null>) {
    const { id } = req.params;
    const result = await this._service.delete(id);
    // console.log('result', result);
    return res.status(204).json(result);
  }
}

export default CarController;
