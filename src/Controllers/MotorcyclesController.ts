import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcyclesService from '../Services/MotorcyclesService';

export default class MotorcylesController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcyclesService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcyclesService();
  }

  async create() {
    try {
      const motorcycle: IMotorcycle = {
        model: this.req.body.model,
        year: this.req.body.year,
        color: this.req.body.color,
        status: this.req.body.status,
        buyValue: this.req.body.buyValue,
        category: this.req.body.category,
        engineCapacity: this.req.body.engineCapacity,
      };
      const data = await this.service.create(motorcycle);

      return this.res.status(201).json(data);
    } catch (err) {
      return this.res.status(400).json({ err });
    }
  }
}
