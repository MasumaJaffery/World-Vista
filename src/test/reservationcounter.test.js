const countReservations = require('../modules/reservationcounter.js');

// returns 1 when passed a reservationsList with one reservation
it('test_single_reservation', () => {
  const reservationsList = ['reservation1'];
  const result = countReservations(reservationsList);
  expect(result).toBe(1);
});

test('counts the number of reservations', () => {
  const reservations = ['nj', 'don', 'test', 'cc'];
  expect(countReservations(reservations)).toBe(4);
});

test('returns 0 when there are no reservations', () => {
  const reservations = [];
  expect(countReservations(reservations)).toBe(0);
});

test('counts the number of reservations when duplicates exist', () => {
  const reservations = [
    'hassan',
    'jane',
    'hassan',
    'fatima',
    'hassan',
    'najibullla',
  ];
  expect(countReservations(reservations)).toBe(6);
});

it('test_null_value', () => {
  expect(() => countReservations(null)).toThrow();
});
