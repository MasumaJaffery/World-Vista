// import getReservationCount from './reservationcounter.js';

const appId = 'FjhFMUdws0lCxR3eXCdS';

let reservationPopup = null;
const getReservationCount = async (itemId) => {
  let countervalue = 0;
  const getResponse = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/reservations?item_id=${itemId}`
  );
  if (getResponse.ok) {
    const events = await getResponse.json();
    events.forEach(() => {
      countervalue = countervalue + 1;
    });

    return countervalue;
  }
  return 0;
};

const createReservationForm = async (itemId) => {
  // Remove existing popup if present
  if (reservationPopup) {
    reservationPopup.remove();
  }

  const popupContainer = document.createElement('div');
  popupContainer.className = 'popup';
  reservationPopup = popupContainer;

  const formContainer = document.createElement('div');
  formContainer.className = 'form-container';
  const counter = await getReservationCount(itemId, formContainer);

  const countryDetails = await getCountryDetails(itemId);
  const countryFlagEl = document.createElement('img');
  countryFlagEl.classList.add('country-flag');
  countryFlagEl.src = countryDetails.flags.png;

  const countryNameEl = document.createElement('h2');
  countryNameEl.classList.add('country-name');
  countryNameEl.textContent = countryDetails.name.common;

  const countryPopulationEl = document.createElement('div');
  countryPopulationEl.classList.add('country-population');
  countryPopulationEl.textContent = `Population: ${countryDetails.population}`;

  const countryCapitalEl = document.createElement('div');
  countryCapitalEl.classList.add('country-capital');
  countryCapitalEl.textContent = `Capital: ${countryDetails.capital}`;

  const countryAreaEl = document.createElement('div');
  countryAreaEl.classList.add('country-area');
  countryAreaEl.textContent = `Area: ${countryDetails.area} km²`;

  const countryContinentEl = document.createElement('div');
  countryContinentEl.classList.add('country-continent');
  countryContinentEl.textContent = `Continent: ${countryDetails.region}`;

  const title = document.createElement('h1');
  title.textContent = 'Add a Reservation';

  const counterElem = document.createElement('h5');
  counterElem.textContent = `Reservations: ${counter}`;

  const closeButton = document.createElement('span');
  closeButton.className = 'close-button';
  closeButton.innerHTML = '&times;';
  closeButton.addEventListener('click', () => {
    popupContainer.remove();
    reservationPopup = null;
  });

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.placeholder = 'Your Name';

  const startDateInput = document.createElement('input');
  startDateInput.type = 'date';
  startDateInput.placeholder = 'Start Date';

  const endDateInput = document.createElement('input');
  endDateInput.type = 'date';
  endDateInput.placeholder = 'End Date';

  const reserveButton = document.createElement('button');
  reserveButton.textContent = 'Reserve';
  reserveButton.addEventListener('click', async () => {
    const reservationData = {
      item_id: itemId,
      username: nameInput.value,
      date_start: startDateInput.value,
      date_end: endDateInput.value,
    };

    try {
      const response = await fetch(
        `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/reservations/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(reservationData),
        }
      );
      if (response.ok) {
        createReservationForm(itemId);
      }
    } catch (error) {
      const errorLabel = document.createElement('label');
      errorLabel.textContent = `Error: ${error}`;
      formContainer.appendChild(errorLabel);
    }
  });

  // Append the elements to the form container
  popupContainer.appendChild(formContainer);
  document.body.appendChild(popupContainer);
  formContainer.appendChild(closeButton);
  formContainer.appendChild(countryFlagEl);
  formContainer.appendChild(countryNameEl);
  formContainer.appendChild(countryPopulationEl);
  formContainer.appendChild(countryCapitalEl);
  formContainer.appendChild(countryAreaEl);
  formContainer.appendChild(countryContinentEl);
  formContainer.appendChild(counterElem);
  formContainer.appendChild(await getReservation(itemId));
  formContainer.appendChild(title);
  formContainer.appendChild(nameInput);
  formContainer.appendChild(startDateInput);
  formContainer.appendChild(endDateInput);
  formContainer.appendChild(reserveButton);
};

const getCountryDetails = async (countryName) => {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`
    );
    const [countryDetails] = await response.json();
    return countryDetails;
  } catch (error) {
    console.log('Error:', error);
    return null;
  }
};

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('btn-reservation')) {
    createReservationForm(event.target.dataset.country);
  }
});

const getReservation = async (itemId) => {
  const getResponse = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/reservations?item_id=${itemId}`
  );
  const reservationInfo = document.createElement('div');
  if (getResponse.ok) {
    const events = await getResponse.json();
    events.forEach((event) => {
      reservationInfo.innerHTML += `
        <h3>Reservation Details:</h3>
        <p>Name: ${event.username}</p>
        <p>Start Date: ${event.date_start}</p>
        <p>End Date: ${event.date_end}</p>
      `;
    });

    return reservationInfo;
  }
  return reservationInfo;
};
