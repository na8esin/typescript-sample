import { v4 as uuidv4 } from 'uuid';
import * as chai from 'chai';
import { limit } from './setting';

const forFilter = [];
let lastToken = '';
// データをたくさん作る
for (let i = 0; i < limit; i++) {
  const token = uuidv4();
  forFilter.push({ token, id: i, device: `device${i}` });
  if (i === limit - 1) lastToken = token;
}

{
  // filter検索
  const hrstart = process.hrtime();
  const filterd = forFilter.filter(e => e.token === lastToken)[0].token;
  chai.assert(filterd === forFilter[limit - 1].token);
  const hrend = process.hrtime(hrstart);
  // 計測結果
  console.info('filter Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)
}


export { }
