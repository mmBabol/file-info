const size = require('../src/size');

test('Size of sample/sample.txt is 34 bytes', () =>{
  expect(size('sample/sample.txt')).toBe('This file has 34 bytes.')
});
