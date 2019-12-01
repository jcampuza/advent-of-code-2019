import fs from 'fs';
import path from 'path';
import { summedMassPerModule, summedMassPerModuleWithFuelIncluded } from './main';

const input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString();

console.log('Part One:', summedMassPerModule(input));
console.log('Part Two:', summedMassPerModuleWithFuelIncluded(input));
