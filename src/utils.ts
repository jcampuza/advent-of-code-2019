// Some of these utils are leftover from last year. Maybe they'll come in handy \o/

export const lines = (input: string) => input.split('\n').filter(i => i !== '');

export class CircularList<T> {
  values: T[];

  constructor(...input: T[]) {
    this.values = input;
  }

  get length() {
    return this.values.length;
  }

  at(index: number) {
    const resolvedIndex = index % this.length;

    return this.values[resolvedIndex];
  }

  push(value: T) {
    return this.values.push(value);
  }

  pop() {
    return this.values.pop();
  }

  [Symbol.iterator]() {
    let idx = 0;

    return {
      next: () => {
        const value = this.at(idx);
        idx += 1;

        return { value: value, done: false };
      }
    };
  }
}

export const sum = (a: number, b: number) => a + b;
