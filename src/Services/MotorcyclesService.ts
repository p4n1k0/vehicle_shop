import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcyclesODM from '../Models/MotorcyclesODM';

export default class MotorcyclesService {
  createMotorcycleDomain(motorcycle: IMotorcycle) {
    const newMotorcycle = new Motorcycle(motorcycle);

    return newMotorcycle;
  }

  async create(motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcyclesODM();
    const data = await motorcycleODM.create(motorcycle);
    const newMotorcycle = this.createMotorcycleDomain(data);

    return newMotorcycle;
  }
}
