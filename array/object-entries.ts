const data = {
  aaa: true,
  bbb: false,
  ccc: true
};

Object.entries(data).forEach(([k, v]) => {
  console.log(k, v);
});
/**
 * aaa true
bbb false
ccc true
 */