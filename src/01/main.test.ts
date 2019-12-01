import { fuelPerModule, fuelPerModuleRecursive } from './main';

it('fuel per module should return the correct values per module', () => {
  expect(fuelPerModule(12)).toEqual(2);
  expect(fuelPerModule(14)).toEqual(2);
  expect(fuelPerModule(1969)).toEqual(654);
  expect(fuelPerModule(100756)).toEqual(33583);
});

it('fuel per module including module fuel amout should return the correct values', () => {
  expect(fuelPerModuleRecursive(14, 0)).toEqual(2);
  expect(fuelPerModuleRecursive(1969, 0)).toEqual(966);
  expect(fuelPerModuleRecursive(100756, 0)).toEqual(50346);
});
