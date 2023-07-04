
let reservationBtn = document.getElementById('btn-reservation');
let reservation = document.getElementsByClassName('reservation');


function createReservationForm() {
    // Create the HTML code using template literals
    let formHTML = `
    <div>
      <h1>Add a Reservation</h1>
      <input type="text" id="name-input" name="name" placeholder="Your Name">
      <input type="date" id="start-date-input" name="start-date" placeholder="Start Date">
      <input type="date" id="end-date-input" name="end-date" placeholder="End Date">
      <button id="reserve">Reserve</button>
    </div>
  `;

    // Append the form HTML to the index of container element reservation
    reservation.innerHTML += formHTML;
}


reservationBtn.addEventListener('click', () => { createReservationForm() } );

//  when click the reserve button, get the values of the input fields
let reserveBtn = document.getElementById('reserve');
reserveBtn.addEventListener('click', () => {
    let name = document.getElementById('name-input').value;
    let startDate = document.getElementById('start-date-input').value;
    let endDate = document.getElementById('end-date-input').value;

    //  create a reservation object
    let reservation = {
        name: name,
        startDate: startDate,
        endDate: endDate
    }

    //  post the reservation object
    fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6Z4Z3X2Z2Z2Z2Z2Z2Z2/reservations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservation),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});
