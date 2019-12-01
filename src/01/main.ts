import { lines, sum } from '../utils';

export const fuelPerModule = (mass: number) => {
  const value = Math.floor(mass / 3) - 2;

  if (value <= 0) {
    return 0;
  }

  return value;
};

export const fuelPerModuleRecursive = (mass: number, fuel = 0): number => {
  const fuelRequired = fuelPerModule(mass);

  if (fuelRequired === 0) {
    return fuel;
  }

  return fuelPerModuleRecursive(fuelRequired, fuel + fuelRequired);
};

export const summedFuelPerModule = (input: string) =>
  lines(input)
    .map(Number)
    .map(fuelPerModule)
    .reduce(sum, 0);

export const summedFuelPerModuleWithFuelIncluded = (input: string) =>
  lines(input)
    .map(Number)
    .map(v => fuelPerModuleRecursive(v))
    .reduce(sum, 0);
