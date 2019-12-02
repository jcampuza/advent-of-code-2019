export class IntcodeComputer {
  memory: number[];
  instructionPointer = 0;
  completed = false;

  constructor(input: number[], noun?: number, verb?: number) {
    this.memory = input.slice();

    if (noun) {
      this.memory[1] = noun;
    }

    if (verb) {
      this.memory[2] = verb;
    }
  }

  run() {
    while (!this.completed) {
      this.nextOp();
    }

    return this.memory;
  }

  nextOp() {
    const opcode = this.memory[this.instructionPointer];

    switch (opcode) {
      case 99: {
        this.completed = true;
        break;
      }
      case 1: {
        this.opADD();
        break;
      }
      case 2: {
        this.opMUL();
      }
    }
  }

  advancePointer(count: number) {
    this.instructionPointer = (this.instructionPointer + count) % this.memory.length;
  }

  opADD() {
    const [, position1, position2, replacement] = this.memory.slice(
      this.instructionPointer,
      this.instructionPointer + 4
    );

    this.memory[replacement] = this.memory[position1] + this.memory[position2];
    this.advancePointer(4);
  }

  opMUL() {
    const [, position1, position2, replacement] = this.memory.slice(
      this.instructionPointer,
      this.instructionPointer + 4
    );

    this.memory[replacement] = this.memory[position1] * this.memory[position2];
    this.advancePointer(4);
  }
}

export const runIntcodeProgram = (input: string) => {
  const intcode = input.split(',').map(Number);
  const computer = new IntcodeComputer(intcode, 12, 2);
  return computer.run();
};

export const findNounAndVerbWithExpectedOutput = (input: string, expectedValue: number) => {
  const intcode = input.split(',').map(Number);

  // Brute force 🤷‍♂️
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      const computer = new IntcodeComputer(intcode, i, j);

      if (computer.run()[0] === expectedValue) {
        return [i, j];
      }
    }
  }
};
