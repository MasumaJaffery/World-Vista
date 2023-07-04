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
     <img src=${data.flags.svg} class="card-img-top" alt="...">
     <div class="card-body">
     <h3>${data.name.common}</h3>
     </div>
     <div class ="comment">
     <button type = "button" class = "btn btn-primary">Comment</button>
     </div>
    </div>`;
    countries.appendChild(country);
}

