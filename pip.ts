judgmentScope('test');
judgmentScope('development');
judgmentScope('production');

// 動作するわけない
function judgmentScope(scope) {
  console.log(scope === ('test'||'development')? 'default':'request');
}

function judgmentScope2(scope) {
  console.log(['test','development'].includes(scope) ? 'default':'request');
}

judgmentScope2('test');
judgmentScope2('development');
judgmentScope2('production');
