const createReservationForm = () => {
    // Create the popup container
    const popupContainer = document.createElement('div');
    popupContainer.className = 'popup';

    // Create the form container
    const formContainer = document.createElement('div');
    formContainer.className = 'form-container';

    // Create the h1 element
    const title = document.createElement('h1');
    title.textContent = 'Add a Reservation';

    // Create the name input
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Your Name';

    // Create the start date input
    const startDateInput = document.createElement('input');
    startDateInput.type = 'date';
    startDateInput.placeholder = 'Start Date';

    // Create the end date input
    const endDateInput = document.createElement('input');
    endDateInput.type = 'date';
    endDateInput.placeholder = 'End Date';

    // Create the reserve button
    const reserveButton = document.createElement('button');
    reserveButton.textContent = 'Reserve';
    reserveButton.addEventListener('click', async () => {
        // Reservation submission code...
    });

    // Append the elements to the form container
    formContainer.appendChild(title);
    formContainer.appendChild(nameInput);
    formContainer.appendChild(startDateInput);
    formContainer.appendChild(endDateInput);
    formContainer.appendChild(reserveButton);

    // Append the form container to the popup container
    popupContainer.appendChild(formContainer);

    // Append the popup container to the body
    document.body.appendChild(popupContainer);
};

// Call the createReservationForm function when the "Reservations" button is clicked
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('btn-reservation')) {
        createReservationForm();
    }
});