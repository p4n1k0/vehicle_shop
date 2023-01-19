import { model, Model, models, Schema, UpdateQuery } from 'mongoose';

export default abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected nameModel: string;

  constructor(schema: Schema, nameModel: string) {
    this.schema = schema;
    this.nameModel = nameModel;
    this.model = models[this.nameModel] || model(this.nameModel, this.schema);
  }

  public async create(vehicle: T): Promise<T> {
    return this.model.create({ ...vehicle });
  }

  public async getAll() {
    return this.model.find();
  }

  public async getById(_id: string): Promise<T | null> {
    return this.model.findById({ _id });
  }

  public async update(_id: string, vehicle: Partial<T>): Promise<T | null> {
    return this.model.findByIdAndUpdate(
      { _id },
      { ...vehicle } as UpdateQuery<T>,
      { new: true },
    );
  }
}
