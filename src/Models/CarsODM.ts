import { model, Model, models, Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';

export default class CarsODM {
  private model: Model<ICar>;

  constructor() {
    const schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      buyValue: { type: Number, required: true },
      status: Boolean,
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.Car || model('Car', schema);
  }

  public async create(car: ICar) {
    return this.model.create(car);
  }

  public async getAll() {
    return this.model.find();
  }

  public async getById(_id: string): Promise<ICar | null> {
    return this.model.findById({ _id });
  }
}
