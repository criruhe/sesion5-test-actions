const esPar = require('../Math');

test('2 es par', () => {
  expect(esPar(2)).toBe(true);
});

test('3 no es par', () => {
  expect(esPar(3)).toBe(false);
});

test('Número negativo -4 es par', () => {
  expect(esPar(-4)).toBe(true);
});

test('Texto no es par', () => {
  expect(() => esPar('texto')).toThrow('El argumento debe ser un número válido.');
});
