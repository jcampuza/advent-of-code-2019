const range = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (v, i) => i + start);

const hasSixDigits = (v: number) => v.toString().length === 6;

const hasAdjacentDigits = (v: number) =>
  `${v}`.split('').some((n, i, arr) => arr[i] === arr[i + 1]);

export const strictHasAdjacentDigits = (v: number) => {
  const value = `${v}`.split('');

  let adjacency = 0;

  for (let i = 1; i < value.length; i++) {
    if (value[i] === value[i - 1]) {
      adjacency += 1;
    } else {
      if (adjacency === 1) {
        return true;
      } else {
        adjacency = 0;
      }
    }
  }

  return adjacency === 1;
};

const hasOnlyIncreasingDigits = (v: number) =>
  `${v}`.split('').every((n, i, arr) => arr[i] <= (arr[i + 1] ?? Infinity));

export const passwordsMeetingCriteria = (input: string) => {
  const [start, end] = input.split('-').map(Number);
  const passed = range(start, end).filter(
    n => hasSixDigits(n) && hasAdjacentDigits(n) && hasOnlyIncreasingDigits(n)
  );

  return passed.length;
};

export const passwordsMeetingCriteriaRevised = (input: string) => {
  const [start, end] = input.split('-').map(Number);
  const passed = range(start, end).filter(
    n => hasSixDigits(n) && strictHasAdjacentDigits(n) && hasOnlyIncreasingDigits(n)
  );

  return passed.length;
};
