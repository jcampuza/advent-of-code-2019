import fs from 'fs';
import path from 'path';
import { passwordsMeetingCriteria, passwordsMeetingCriteriaRevised } from './main';

const input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString();

const output1 = passwordsMeetingCriteria(input);
console.log('Part One:', output1);

const output2 = passwordsMeetingCriteriaRevised(input);
console.log('Part Two:', output2);
