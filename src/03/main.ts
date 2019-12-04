import { range } from '../utils';

interface Position {
  x: number;
  y: number;
  steps: number;
}

type Direction = 'U' | 'D' | 'L' | 'R';

interface Traversal {
  direction: Direction;
  value: number;
}

const stringify = (pos: Position) => `x${pos.x},y${pos.y}`;

const getTraversal = (point: string): Traversal => {
  const direction = point[0] as Direction;
  const value = Number(point.slice(1));

  return { direction, value };
};

const getNextPositions = (traversal: Traversal, current: Position = { x: 0, y: 0, steps: 0 }) => {
  switch (traversal.direction) {
    case 'U':
      return range(traversal.value).map(v => ({
        x: current.x,
        y: current.y + v,
        steps: current.steps + v
      }));
    case 'D':
      return range(traversal.value).map(v => ({
        x: current.x,
        y: current.y - v,
        steps: current.steps + v
      }));
    case 'L':
      return range(traversal.value).map(v => ({
        x: current.x - v,
        y: current.y,
        steps: current.steps + v
      }));
    case 'R':
      return range(traversal.value).map(v => ({
        x: current.x + v,
        y: current.y,
        steps: current.steps + v
      }));
    default:
      return current;
  }
};

const getDistance = (position: Position[]) => {
  return Math.sqrt(position[0].x ** 2 + position[0].y ** 2);
};

const minFrom = <T>(items: T[], transformation: (item: T) => number) => {
  const mins = items.map(transformation);
  const minIndex = mins.indexOf(Math.min(...mins));

  return items[minIndex];
};

const findPositions = (path: Traversal[]) =>
  path.reduce(
    (acc, traversal) => acc.concat(getNextPositions(traversal, acc[acc.length - 1])),
    [] as Position[]
  );

const findIntersections = (positionsA: Position[], positionsB: Position[]) => {
  const m = new Map<string, Position>();
  const intersections: Position[][] = [];

  for (const pos of positionsA) {
    m.set(stringify(pos), pos);
  }

  for (const pos of positionsB) {
    const lookup = m.get(stringify(pos));

    if (lookup) {
      intersections.push([lookup, pos]);
    }
  }

  return intersections;
};

export const findClosestIntersection = (input: string) => {
  const [path1, path2] = input
    .split('\n')
    .map(str => str.split(',').map(getTraversal))
    .map(findPositions);

  const intersections = findIntersections(path1, path2);
  const minDistanceIntersection = minFrom(intersections, intersection => getDistance(intersection));

  return minDistanceIntersection[0].x + minDistanceIntersection[0].y;
};

export const findLowestSignalDelay = (input: string) => {
  const [path1, path2] = input
    .split('\n')
    .map(str => str.split(',').map(getTraversal))
    .map(findPositions);

  const intersections = findIntersections(path1, path2);
  const minStepsIntersection = minFrom(intersections, intersection => {
    return intersection[0].steps + intersection[1].steps;
  });

  return minStepsIntersection[0].steps + minStepsIntersection[1].steps;
};
