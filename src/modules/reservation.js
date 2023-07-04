let reservation = document.getElementsByClassName('reservation');
function createReservationForm() {
    // Create the HTML code using template literals
    let formHTML = `
    <div>
      <h1>Add a Reservation</h1>
      <input type="text" id="name-input" name="name" placeholder="Your Name">
      <input type="date" id="start-date-input" name="start-date" placeholder="Start Date">
      <input type="date" id="end-date-input" name="end-date" placeholder="End Date">
      <button>Reservation</button>
    </div>
  `;

    // Append the form HTML to the index of container element reservation
    reservation.innerHTML += formHTML;
}

let reservationBtn = document.getElementById('btn-reservation');
//  when click reservation button, create a form as a modal
reservationBtn.addEventListener('click', () => { createReservationForm() } );