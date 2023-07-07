const countReservations = require('../modules/reservationcoutner.js');

  // Returns 1 when passed a reservationsList with one reservation
  it('test_single_reservation', () => {
    const reservationsList = ['reservation1'];
    const result = countReservations(reservationsList);
    expect(result).toBe(1);
});

// Returns the correct count when passed a reservationsList with multiple reservations
test('counts the number of reservations', () => {
  const reservations = ['nj', 'don', 'test', 'cc'];
  expect(countReservations(reservations)).toBe(4);
});

// Returns 0 when passed an empty reservationsList
test('returns 0 when there are no reservations', () => {
  const reservations = [];
  expect(countReservations(reservations)).toBe(0);
});

// Returns the correct count when passed a reservationsList with duplicate reservations
test('counts the number of reservations when duplicates exist', () => {
  const reservations = ['hassan', 'jane', 'hassan', 'fatima', 'hassan', 'najibullla'];
  expect(countReservations(reservations)).toBe(6);
});

 // Throws an error when passed a null value
 it('test_null_value', () => {
  expect(() => countReservations(null)).toThrow();
});

