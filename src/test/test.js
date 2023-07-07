const { itemcount } = require('../modules/home-counter.js');
describe('itemcount', () => {
  it('updates the count element with the correct number', () => {
    // Mock the DOM elements
    const mockCountElement = { textContent: '' };
    const mockCountriesElements = [{}, {}, {}];

    // Call the itemcount function with the mock elements
    itemcount(mockCountElement, mockCountriesElements);

    // Assert that the count element textContent is updated correctly
    expect(mockCountElement.textContent).toBe('(3)');
  });
});

