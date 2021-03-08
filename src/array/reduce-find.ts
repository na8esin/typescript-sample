import * as chai from 'chai';

function main() { }

class IdPoint {
  id: String;
  point: number;
}

const reducer = (accumulator: IdPoint[], current: IdPoint) => {
  const found = accumulator.find(e => e.id === current.id);
  if (found == null) {
    accumulator.push(current);
    return accumulator;
  }

  // シャローコピーなのでこれでOK
  found.point += current.point;
  return accumulator;
}

const store: IdPoint[] = [
  { id: 'vvsbsd', point: 1 },
  { id: 'aabbdd', point: 1 },
  { id: 'bbsdvv', point: 1 },
  { id: 'vvsbsd', point: 1 },
  { id: 'bbsdvv', point: 2 },
  { id: 'vvsbsd', point: 1 },
];

const result = store.reduce(reducer, []);
console.log(result);

chai.assert.deepEqual([
  { id: 'vvsbsd', point: 3 },
  { id: 'aabbdd', point: 1 },
  { id: 'bbsdvv', point: 3 }
], result);