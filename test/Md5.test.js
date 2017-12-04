const md5 = require('../src/md5');

test('The MD5 digest of the contents of sample.txt is 9e107d9d372bb6826bd81d3542a419d6', () =>{
  expect(md5('sample/sample.txt')).toBe('9e107d9d372bb6826bd81d3542a419d6')
});
