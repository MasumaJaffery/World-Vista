const countriesArray = []; // Array to store the country objects
const involvementApiEndpoint = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FjhFMUdws0lCxR3eXCdS/likes';
const iconbtn = document.querySelector('.icon-btn');
const likecounter = document.querySelector('.like-counter');
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

