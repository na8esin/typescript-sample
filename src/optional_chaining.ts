const obj=null;

console.log(obj?.id);
console.log(obj?.id ?? null);
console.log(obj?.id || null);

// これだめ
//console.log(obj.id ?? null);