import { ICar } from '../../interfaces/ICar';

export const carMock:ICar = {
    model: "Ferrari Maranello",
    year: 1963,
    color: "red",
    buyValue: 3500000,
    doorsQty: 2,
    seatsQty: 2,
};

export const carMockId:ICar & { _id:string } = {
	_id: "4edd40c86762e0fb12000003",
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  doorsQty: 2,
  seatsQty: 2,
};

export const carMockArray:ICar[] & { _id:string }[] = [
  {
	  _id: "4edd40c86762e0fb12000003",
    model: "Ferrari Maranello",
    year: 1963,
    color: "red",
    buyValue: 3500000,
    doorsQty: 2,
    seatsQty: 2,
  },
  {
	  _id: "4edd40c86762e0fb12000004",
    model: "Fusca",
    year: 1966,
    color: "amarela",
    buyValue: 3500,
    doorsQty: 2,
    seatsQty: 2,
  },
];

export const carMockChange:ICar = {
	model: "Ferrari Maranello",
  year: 1963,
  color: "red Ferrari",
  buyValue: 3500000,
  doorsQty: 2,
  seatsQty: 2,
};

export const carMockChangeId:ICar & { _id:string } = {
	_id: "4edd40c86762e0fb12000003",
	model: "Ferrari Maranello",
  year: 1963,
  color: "red Ferrari",
  buyValue: 3500000,
  doorsQty: 2,
  seatsQty: 2,
};

// export {
// 	carMock,
//   carMockArray,
// 	carMockId,
// 	carMockChange,
// 	carMockChangeId,
// };
