const notDeletedCondition = { where: { deleteFlg: 0 } };
const otherCondition = {where: { name: 'paul' }};
const merged = {...notDeletedCondition, ...otherCondition};

// 上書きされる
console.log(merged); // { where: { name: 'paul' } }


const notDeleted = { deleteFlg: 0 };
const other = { name: 'paul' };
console.log( {where: {notDeleted, other}});
// { where: { notDeleted: { deleteFlg: 0 }, other: { name: 'paul' } } }

console.log( {where: notDeleted});
// { where: { deleteFlg: 0 } }

console.log( {where: {...notDeleted, ...other}});
// { where: { deleteFlg: 0, name: 'paul' } }

console.log( {where: {notDeleted, ...other}});
// { where: { notDeleted: { deleteFlg: 0 }, name: 'paul' } }
// 逆に const deleteFlg = 0;でいいのか？

const deleteFlg = 0;
console.log( {where: {deleteFlg, ...other}});
// { where: { deleteFlg: 0, name: 'paul' } }