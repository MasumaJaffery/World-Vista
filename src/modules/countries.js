const getcountry = async() => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      data.forEach(item => {
        postcountry(item);
      });
    } catch (error) {
      console.log('Error');
    }
  }
  getcountry();

  const postcountry = async (data) => {
    const countries = document.querySelector('.countries');
    const country = document.createElement('div');
    country.className = 'country';
    country.innerHTML =
    `<div class="card country" style="width: 18rem;">
     <img src=${data.flags.svg} class="card-img-top" alt="..."  style="object-fit: cover; width: 100%; height: 12rem;>
     <div class="card-body">
     <h5>${data.name.common}</h5>
     <div class ="comment">
     <button type = "button" class = "btn btn-comment btn-primary">Comment</button>
     </div>
     <div class ="reservation">
     <button type = "button" class = "btn btn-comment btn-success btn-reservation">Reservations</button>
     </div>
     </div>
    </div>`;
    countries.appendChild(country);
}

export  {getcountry, postcountry};