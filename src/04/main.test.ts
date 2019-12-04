import { strictHasAdjacentDigits } from './main';

it('strict adjacency should return the correct value', () => {
  expect(strictHasAdjacentDigits(112233)).toEqual(true);
  expect(strictHasAdjacentDigits(123444)).toEqual(false);
  expect(strictHasAdjacentDigits(111122)).toEqual(true);
});
