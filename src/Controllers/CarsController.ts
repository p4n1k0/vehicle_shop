import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarsService from '../Services/CarsService';

export default class CarsController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarsService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarsService();
  }

  async create() {
    try {
      const car: ICar = {
        model: this.req.body.model,
        year: this.req.body.year,
        color: this.req.body.color,
        status: this.req.body.status,
        buyValue: this.req.body.buyValue,
        doorsQty: this.req.body.doorsQty,
        seatsQty: this.req.body.seatsQty,
      };
      const data = await this.service.create(car);

      return this.res.status(201).json(data);
    } catch (err) {
      return this.res.status(400).json({ err });
    }
  }

  async getAll() {
    try {
      const data = await this.service.getAll();
      this.res.status(200).json(data);
    } catch (err) {
      return this.res.status(400).json({ err });
    }
  }

  async getById() {
    try {
      const { id } = this.req.params;
      
      if (id.length !== 24) {
        return this.res.status(422).json({ message: 'Invalid mongo id' });
      }
      const data = await this.service.getById(id);

      if (!data) {
        return this.res.status(404).json({ message: 'Car not found' });
      }
      return this.res.status(200).json(data);
    } catch (err) {
      return this.res.status(400).json({ err });
    }
  }

  async update() {
    try {
      const { id } = this.req.params;
      const carUpdated = this.req.body;

      if (id.length !== 24) {
        return this.res.status(422).json({ message: 'Invalid mongo id' });
      }
      const data = await this.service.update(id, carUpdated);

      if (!data) {
        return this.res.status(404).json({ message: 'Car not found' });
      }
      return this.res.status(200).json(data);
    } catch (err) {
      return this.res.status(400).json({ err });
    }
  }
}
