const processor = require('../processor');

test('squares 4 to be equal 16', () => {
  expect(processor.square(4)).toBe(16)
});

test('squares 0 to be equal 0', () => {
  expect(processor.square(0)).toBe(0)
});
