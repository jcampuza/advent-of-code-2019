import fs from 'fs';
import path from 'path';
import { findClosestIntersection, findLowestSignalDelay } from './main';

const input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString();

const output1 = findClosestIntersection(input);
console.log('Part One:', output1);

const output2 = findLowestSignalDelay(input);
console.log('Part Two:', output2);
