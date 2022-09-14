import * as sinon from 'sinon';
import chai from 'chai';
import CarModel from '../../../models/modelCar';
import ServiceCar from '../../../services/serviceCar';
import { ErrorTypes } from '../../../errors/errorsCatalog';
import { ZodError } from 'zod';
import {
	carMock,
  carMockArray,
	carMockId,
	carMockChange,
	carMockChangeId,
} from '../../mocks/carMock';

const { expect } = chai;

describe('Car Service', () => {
	const carModel = new CarModel();
	const serviceCar = new ServiceCar(carModel);

	before(() => {
		sinon.stub(carModel, 'create').resolves(carMockId);

		sinon.stub(carModel, 'readOne')
			.onCall(0).resolves(carMockId)
			.onCall(1).resolves(null)
			.onCall(2).resolves(carMockId);

		sinon.stub(carModel, 'update').resolves(carMockId)
		sinon.stub(carModel, 'read').resolves(carMockArray)
		sinon.stub(carModel, 'delete').resolves(carMockId)
	});

	after(() => sinon.restore());

	describe('function create', () => {
		it('Success', async () => {
			const carCreated = await serviceCar.create(carMock);
			expect(carCreated).to.be.deep.equal(carMockId);
		});

		it('Failure', async () => {
			try {
				await serviceCar.create({} as any);
			} catch (error) {
				expect(error).to.be.instanceOf(ZodError);
			}
		});
	});

	describe('Function readOne', () => {
		it('Success', async () => {
			const carFound = await serviceCar.readOne(carMockId._id);

			expect(carFound).to.be.deep.equal(carMockId);
		});

		it('Failure', async () => {
			try {
				await serviceCar.readOne(carMockId._id);
			} catch (error: any) {
				expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
			}
		});
	});

	describe('Function read', () => {
		it('Success', async () => {
			const carsFound = await serviceCar.read();

			expect(carsFound).to.be.deep.equal(carMockArray);
		});
	});

	describe('function Update', () => {
		it('Success', async () => {
			const car = await serviceCar.update('4edd40c86762e0fb12000003', carMock);
			expect(car).to.be.deep.equal(carMockId);
		});
	});
});
