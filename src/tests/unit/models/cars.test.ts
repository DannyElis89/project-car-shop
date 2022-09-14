import * as sinon from 'sinon';
import chai from 'chai';
import CarModel from '../../../models/modelCar';
import { Model } from 'mongoose';
import { ErrorTypes } from '../../../errors/errorsCatalog';
import {
	carMock,
  carMockArray,
	carMockId,
	carMockChange,
	carMockChangeId,
} from '../../mocks/carMock';


const { expect } = chai;


describe('Car Model', () => {
	const carModel = new CarModel();

	before(async () => {
		sinon.stub(Model, 'create').resolves(carMockId);
    sinon.stub(Model, 'find').resolves(carMockArray);
		sinon.stub(Model, 'findOne').resolves(carMockId);
		sinon.stub(Model, 'findByIdAndUpdate').resolves(carMockChangeId);
    sinon.stub(Model, 'findByIdAndRemove').resolves(carMockChangeId);
	});

	after(() => sinon.restore());

	describe('Function "create" works', () => {
		it('successfully created', async () => {
			const newCar = await carModel.create(carMock);
			expect(newCar).to.be.deep.equal(carMockId);
		});
	});

  describe('Function "read" works', () => {
		it('successfully found', async () => {
			const carFound = await carModel.read();
			expect(carFound).to.be.deep.equal(carMockArray);
		});
	});

	describe('Function "readOne" works', () => {
		it('successfully found', async () => {
			const carFound = await carModel.readOne('4edd40c86762e0fb12000003');
			expect(carFound).to.be.deep.equal(carMockId);
		});

		it('_id not found', async () => {
			try {
				await carModel.readOne('123Id-Invalido');
			} catch (error: any) {
				expect(error.message).to.be.eq(ErrorTypes.InvalidMongoId);
			}
		});
	});

	describe('Function "update" works', () => {
		it('successfully changed', async () => {
			const carChanged = await carModel.update('4edd40c86762e0fb12000003', carMockChange);
			expect(carChanged).to.be.deep.equal(carMockChangeId);
		});

		it('_id not found to change', async () => {
			try {
				await carModel.readOne('123Id-Invalido');
			} catch (error:any) {
				expect(error.message).to.be.eq(ErrorTypes.InvalidMongoId);
			}
		});
	});
});
