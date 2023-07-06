const appId = 'FjhFMUdws0lCxR3eXCdS';

const createReservationForm = async (itemId) => {
  const popupContainer = document.createElement('div');
  popupContainer.className = 'popup';

  const formContainer = document.createElement('div');
  formContainer.className = 'form-container';
  const counter = await getReservation(itemId, formContainer);

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

  const counterElem = document.createElement('h1');
  counterElem.textContent = `Reservations: ${counter}`;

  const closeButton = document.createElement('button');
  closeButton.className = 'close-button';
  closeButton.innerHTML = '&times;';
  closeButton.addEventListener('click', () => {
    popupContainer.remove();
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
        getReservation(itemId, formContainer);
      }
    } catch (error) {
      const errorLabel = document.createElement('label');
      errorLabel.textContent = `Error: ${error}`;
      formContainer.appendChild(errorLabel);
    }
  });

  // Append the elements to the form container
  formContainer.appendChild(countryFlagEl);
  formContainer.appendChild(countryNameEl);
  formContainer.appendChild(countryPopulationEl);
  formContainer.appendChild(countryCapitalEl);
  formContainer.appendChild(countryAreaEl);
  formContainer.appendChild(countryContinentEl);
  formContainer.appendChild(title);
  formContainer.appendChild(counterElem);
  formContainer.appendChild(closeButton);
  formContainer.appendChild(nameInput);
  formContainer.appendChild(startDateInput);
  formContainer.appendChild(endDateInput);
  formContainer.appendChild(reserveButton);

  popupContainer.appendChild(formContainer);

  document.body.appendChild(popupContainer);
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
  console.log({ data: event.target.dataset.country });
  if (event.target.classList.contains('btn-reservation')) {
    createReservationForm(event.target.dataset.country);
  }
});

const getReservation = async (itemId, formContainer) => {
  const getResponse = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/reservations?item_id=${itemId}`
  );
  if (getResponse.ok) {
    const events = await getResponse.json();
    events.forEach((event) => {
      const reservationInfo = document.createElement('div');
      reservationInfo.innerHTML = `
              <h3>Reservation Details:</h3>
              <p>Name: ${event.username}</p>
              <p>Start Date: ${event.date_start}</p>
              <p>End Date: ${event.date_end}</p>
             `;
      formContainer.appendChild(reservationInfo);
    });

    return events.length;
  }
  return 0;
};
