import fs from 'fs';
import path from 'path';
import { runIntcodeProgram, findNounAndVerbWithExpectedOutput } from './main';

const input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString();

const output = runIntcodeProgram(input);
console.log('Part One:', output[0]);

const [noun, verb] = findNounAndVerbWithExpectedOutput(input, 19690720);
console.log('Part Two:', 100 * noun + verb);
