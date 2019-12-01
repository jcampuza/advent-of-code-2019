import fs from 'fs';
import path from 'path';
import { summedFuelPerModule, summedFuelPerModuleWithFuelIncluded } from './main';

const input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString();

console.log('Part One:', summedFuelPerModule(input));
console.log('Part Two:', summedFuelPerModuleWithFuelIncluded(input));
