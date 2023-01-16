import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarsODM from '../Models/CarsODM';

export default class CarsService {
  createCarDomain(car: ICar) {
    const newCar = new Car(car);

    return newCar;
  }

  async create(car: ICar) {
    const carODM = new CarsODM();
    const data = await carODM.create(car);
    const newCar = this.createCarDomain(data);

    return newCar;
  }
}
