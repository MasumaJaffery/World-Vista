const countReservations = require('../modules/reservationcoutner.js');

test('counts the number of reservations', () => {
  const reservations = ['nj', 'bb', 'tt', 'cc'];
  expect(countReservations(reservations)).toBe(4);
});

test('returns 0 when there are no reservations', () => {
  const reservations = [];
  expect(countReservations(reservations)).toBe(0);
});

test('counts the number of reservations when duplicates exist', () => {
  const reservations = ['aa', 'dd', 'vv', 'tt', 'dd', 'dd'];
  expect(countReservations(reservations)).toBe(6);
});
