import ICar from '../Interfaces/ICar';

export default class Car {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected buyValue: number;
  protected status: boolean | undefined;
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: ICar) {
    this.id = car._id;
    this.model = car.model;
    this.year = car.year;
    this.color = car.color;
    this.buyValue = car.buyValue;
    this.status = car.status || false;
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }
}
