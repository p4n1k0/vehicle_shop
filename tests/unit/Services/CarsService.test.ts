import sinon from 'sinon';
import { expect } from 'chai';
import { describe } from 'mocha';
import { Model } from 'mongoose';
import CarsService from '../../../src/Services/CarsService';

const carInput = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const output = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  buyValue: 15.99,
  status: true,
  doorsQty: 4,
  seatsQty: 5,
  _id: '63c1acbbd8486aa88522cfa8',
  __v: 0,    
};

const carOutput = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  buyValue: 15.99,
  status: true,
  doorsQty: 4,
  seatsQty: 5,
  id: '63c1acbbd8486aa88522cfa8',    
};
  
const outputs = [{
  _id: '63c1c00e6bcd1fa5d4087e2c',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  buyValue: 15.99,
  status: true,
  doorsQty: 4,
  seatsQty: 5,    
}, {
  _id: '63c1c0b96bcd1fa5d4087e30',
  model: 'Marea2',
  year: 2002,
  color: 'Black',
  buyValue: 15.99,
  status: true,
  doorsQty: 4,
  seatsQty: 5,
}];
  
const carsOutput = [{
  id: '63c1c00e6bcd1fa5d4087e2c',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  buyValue: 15.99,
  status: true,
  doorsQty: 4,
  seatsQty: 5,   
}, {
  id: '63c1c0b96bcd1fa5d4087e30',
  model: 'Marea2',
  year: 2002,
  color: 'Black',
  buyValue: 15.99,
  status: true,
  doorsQty: 4,
  seatsQty: 5,
}];

describe('Deveria cadastrar um carro', () => {
  afterEach(function () {
    sinon.restore();    
  });

  it('Deveria cadastrar um carro com SUCESSO', async function () {
    sinon.stub(Model, 'create').resolves(output);

    const carsService = new CarsService();
    const data = await carsService.create(carInput);

    expect(data).to.be.deep.eq(carOutput);
  });

  it('Deveria buscar todos os carros com SUCESSO', async function () {
    sinon.stub(Model, 'find').resolves(outputs);

    const carsService = new CarsService();
    const data = await carsService.getAll();

    expect(data).to.be.deep.eq(carsOutput);
  });

  it('Deveria buscar um carro pelo id com SUCESSO', async function () {
    sinon.stub(Model, 'findById').resolves(output);

    const carsService = new CarsService();
    const data = await carsService.getById('63c1acbbd8486aa88522cfa8');

    expect(data).to.be.deep.eq(carOutput);
  });
});
