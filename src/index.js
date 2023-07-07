import './style.css';
import './modules/countries.js';
import './modules/likeitems.js';
import './modules/reservation.js';
import './modules/commentpop.js';
function updateCountryCounter() {
  const countryCounter = document.querySelector('.country-counter');
  const countryElements = document.querySelectorAll('.country');

  countryCounter.textContent = countryElements.length.toString();
}
updateCountryCounter();
