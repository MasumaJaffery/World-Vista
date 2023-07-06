const getcountry = async () => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    data.forEach((item) => {
      postcountry(item);
    });
  } catch (error) {
    console.log('Error');
  }
};
getcountry();

  const postcountry = async (data) => {
    const countries = document.querySelector('.countries');
    const country = document.createElement('div');
    country.className = 'country';
    country.innerHTML =
    `<div class="card country" style="width: 20rem; height: 23.5rem;">
     <img src=${data.flags.svg} class="card-img-top" alt="..."  style="object-fit: cover; width: 100%; height: 12rem;>
     <div class="card-body">
     <div class = "card-flex">
     <h5>${data.name.common}</h5>
     <div class = "icon-counter">
     <button type = "button" class = "icon-btn"><i class="fa-regular fa-heart"></i>
     </button>
     <div class = "like">
     <span class="like-counter"></span><span> like's</span></div>
     </div>
     </div>
     <div class ="comment">
     <button type = "button" class = "btn btn-comment btn-primary">Comment</button>
     </div>
     <div class ="reservation">
     <button type = "button" class = "btn btn-reservation btn-success">Reservations</button>
     </div>
     </div>
    </div>`;
    countries.appendChild(country);
    //itemcount() is callback func here!
    itemcount();
}
// Countries Card Counter!
const itemcount = async () => {
  const count = document.getElementById('count');
  const countries = document.querySelectorAll('.country');
  count.textContent = `(${countries.length}) `;
}
