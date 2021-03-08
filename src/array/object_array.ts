function main() {
  const data = [{
    device: 'android',
    token: 'aaa'
  }, {
    device: 'apns',
    token: 'bbb'
  }];

  const tokens = data.map((e) => {
    return e.token;
  });

  console.log(tokens);
}

main();