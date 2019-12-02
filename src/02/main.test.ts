import { IntcodeComputer } from './main';

it('intcode computer should return the correct outputs', () => {
  const run = (input: string, expected: string) => {
    const computer = new IntcodeComputer(input.split(',').map(Number));
    expect(computer.run().join(',')).toEqual(expected);
  };

  run('1,0,0,0,99', '2,0,0,0,99');
  run('2,3,0,3,99', '2,3,0,6,99');
  run('2,4,4,5,99,0', '2,4,4,5,99,9801');
  run('1,1,1,4,99,5,6,0,99', '30,1,1,4,2,5,6,0,99');
});
