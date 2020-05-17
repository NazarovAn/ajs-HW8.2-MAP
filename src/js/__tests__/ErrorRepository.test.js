import ErrorRepository from '../ErrorRepository';

test('translate unknown error', () => {
  const errRep = new ErrorRepository();
  errRep.addToStorage(1);
  expect(errRep.translate(1)).toBe('Unknown error');
});

test('translate unknown error', () => {
  const errRep = new ErrorRepository();
  errRep.addToStorage(1, null);
  expect(errRep.translate(1)).toBe('Unknown error');
});

test('addToStorage', () => {
  const errRep = new ErrorRepository();
  errRep.addToStorage(1, 'First error');
  expect(errRep.translate(1)).toBe('First error');
});

test('addToStorage - rewrite error', () => {
  const errRep = new ErrorRepository();
  errRep.addToStorage(1, 'First error');
  errRep.addToStorage(1, 'Second error');
  expect(errRep.translate(1)).toBe('Second error');
});

test('addToStorage - more errors', () => {
  const errRep = new ErrorRepository();
  errRep.addToStorage(1, 'First error');
  errRep.addToStorage(2, 'Second error');
  errRep.addToStorage(3, 'Third error');
  expect(errRep.errorStorage).toEqual(new Map([[1, 'First error'], [2, 'Second error'], [3, 'Third error']]));
});
