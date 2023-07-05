const createReservationForm = () => {
  const popupContainer = document.createElement('div');
  popupContainer.className = 'popup';

  const formContainer = document.createElement('div');
  formContainer.className = 'form-container';

  const title = document.createElement('h1');
  title.textContent = 'Add a Reservation';

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
      name: nameInput.value,
      startDate: startDateInput.value,
      endDate: endDateInput.value,
    };

    try {
      const response = await fetch(
        'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/abc234/reservations/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(reservationData),
        }
      );

      if (response.ok) {
        const reservationInfo = document.createElement('div');
        reservationInfo.innerHTML = `
          <h3>Reservation Details:</h3>
          <p>Name: ${reservationData.name}</p>
          <p>Start Date: ${reservationData.startDate}</p>
          <p>End Date: ${reservationData.endDate}</p>
        `;
        formContainer.appendChild(reservationInfo);
      } else {
        const errorLabel = document.createElement('label');
        errorLabel.textContent = 'Error recording reservation';
        formContainer.appendChild(errorLabel);
      }
    } catch (error) {
      const errorLabel = document.createElement('label');
      errorLabel.textContent = `Error: ${error}`;
      formContainer.appendChild(errorLabel);
    }
  });

  // Append the elements to the form container
  formContainer.appendChild(title);
  formContainer.appendChild(closeButton);
  formContainer.appendChild(nameInput);
  formContainer.appendChild(startDateInput);
  formContainer.appendChild(endDateInput);
  formContainer.appendChild(reserveButton);

  popupContainer.appendChild(formContainer);

  document.body.appendChild(popupContainer);
};

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('reservation')) {
    createReservationForm();
  }
});
