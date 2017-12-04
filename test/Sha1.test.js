const sha1 = require('../src/sha1');

test('The Sha1 digest of the contents of sample.txt is 2fd4e1c67a2d28fced849ee1bb76e7391b93eb12', () =>{
  expect(sha1('sample/sample.txt')).toBe('2fd4e1c67a2d28fced849ee1bb76e7391b93eb12')
});
