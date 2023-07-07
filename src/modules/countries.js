import './likeitems.js';
const getcountry = async () => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    console.log(data);
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
  country.innerHTML = `
    <div class="card country" style="width: 18rem;">
      <img src=${data.flags.svg} class="card-img-top" alt="..." style="object-fit: cover; width: 100%; height: 12rem;">
      <div class="card-body">
        <h5>${data.name.common}</h5>
<div class="like">
          <button  class="icon-btn btn-like" data-country="${data.name.common}">
  <i class="far fa-heart"></i>
</button>

          <span class="like-counter">0</span>
        </div>
        <div class="comment">
          <button type="button" class="btn btn-commentt btn-primary" data-country="${data.name.common}">Comment</button>
        </div>
        <div class="reservation">
          <button type="button" class="btn btn-comment btn-success btn-reservation" data-country="${data.name.common}">Reservations</button>
        </div>
        
      </div>
    </div>`;

  countries.appendChild(country);
};
