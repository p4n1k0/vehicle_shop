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

  async getAll() {
    const carODM = new CarsODM();
    const data = await carODM.getAll();

    return data.map((car) => {
      const newCar = this.createCarDomain(car);

      return newCar;
    });
  }

  async getById(id: string) {
    const carODM = new CarsODM();
    const data = await carODM.getById(id);

    if (data) {
      const newCar = this.createCarDomain(data);

      return newCar;
    }
    return data;
  }

  async update(id: string, carUpdated: ICar) {
    const carODM = new CarsODM();
    const data = await carODM.update(id, carUpdated);

    if (data) {
      const newCar = this.createCarDomain(data);

      return newCar;
    }
  }
}
