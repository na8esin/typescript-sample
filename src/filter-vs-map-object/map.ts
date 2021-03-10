import { v4 as uuidv4 } from 'uuid';
import * as chai from 'chai';
import { limit } from './setting';

const forMap = new Map<String, { id: number, device: string }>();

let lastToken = '';
// データをたくさん作る
for (let i = 0; i < limit; i++) {
  const token = uuidv4();
  forMap.set(token, { id: i, device: `device${i}` });
  if (i === limit - 1) lastToken = token;
}
{
  // Map検索
  const hrstart = process.hrtime();
  chai.assert(forMap.get(lastToken)?.id === limit - 1);
  const hrend = process.hrtime(hrstart);
  // 計測結果
  console.info('Map Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)
}
export { }
