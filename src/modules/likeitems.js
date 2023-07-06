const countriesArray = []; // Array to store the country objects
const involvementApiEndpoint = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FjhFMUdws0lCxR3eXCdS/likes';

// Fetching countries from REST Countries API
fetch('https://restcountries.com/v2/all')
  .then(response => response.json())
  .then(data => {
    // Looping through the fetched data and extracting the required information
    data.forEach(country => {
      const { name, capital, population, area } = country; // Customize the properties you need for each country
      
      // Creating a country object with the desired information
      const countryObj = {
        name,
        capital,
        population,
        area
      };

      // Adding the country object to the array
      countriesArray.push(countryObj);
    });

    // Looping through the countriesArray and sending like requests for each country
    countriesArray.forEach(country => {
      sendLikeRequest(country);
    });
  })
  .catch(error => {
    console.log('Error:', error);
  });

// Function to send a POST request to the Involvement API for a specific country
async function sendLikeRequest(country) {
  try {
    const response = await fetch(involvementApiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        item_id: country.name
      })
    });

    if (response.ok) {
      console.log(`Liked ${country.name}`);
    } else {
      console.error(`Failed to like ${country.name}`);
    }
  } catch (error) {
    console.error(`Error liking ${country.name}:`, error);
  }
}

// Function to update the like counter
async function updateLikeCounter() {
  try {
    const response = await fetch(involvementApiEndpoint);
    const data = await response.json();
    console.log(data)
    const likecounter = document.querySelectorAll('.like-counter');
    if (likecounter.length > 0) {
      likecounter.forEach(like => {
        like.innerHTML = data.length;
      });
    } else {
      console.error('Error: Unable to find the like counter elements.');
    }
  } catch (error) {
    console.error('Error updating like counter:', error);
  }
}

document.addEventListener('click', async (event) => {
  if (event.target.classList.contains('icon-btn')) {
    const iconBtn = event.target;
    const countryName = iconBtn.getAttribute('data-country');
    try {
      const response = await fetch(`${involvementApiEndpoint}/name/${countryName}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          countryName,
        }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      await updateLikeCounter();
      console.log('Like added');
    } catch (error) {
      console.error(error);
    }
  }
});

// Call updateLikeCounter on initial page load
updateLikeCounter();

