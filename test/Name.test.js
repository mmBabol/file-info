const name = require('../src/name');

test('Name of sample/sample.txt is sample.txt', () =>{
  expect(name('../sample/sample.txt')).toBe('The name of this file is sample.txt')
});
