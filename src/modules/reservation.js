// Create a reservation form
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

// Call the createReservationForm function when the "Reservations" button is clicked
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('btn-reservation')) {
        createReservationForm();
    }
});
