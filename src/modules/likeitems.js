const countriesArray = [];
const involvementApiEndpoint = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FjhFMUdws0lCxR3eXCdS';

// Fetching countries from REST Countries API
async function fetchCountries() {
  try {
    const response = await fetch('https://restcountries.com/v2/all');
    const data = await response.json();

    data.forEach(country => {
      const { name, capital, population, area } = country;
      const countryObj = { name, capital, population, area };
      countriesArray.push(countryObj);
    });

    // Send like requests for each country
    await Promise.all(countriesArray.map(sendLikeRequest));

    // Update like counters
    await updateLikeCounter();
  } catch (error) {
    console.log('Error:', error);
  }
}

// Function to send a POST request to the Involvement API for a specific country
async function sendLikeRequest(country) {
  try {
    const response = await fetch(`${involvementApiEndpoint}/likes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: country.name,
      }),
    });

    if (response.ok) {
      console.log('Like added for', country.name);
      return true; // Indicate successful like request
    } else {
      console.error(`Failed to like ${country.name}`);
      return false; // Indicate failed like request
    }
  } catch (error) {
    console.error(`Error liking ${country.name}:`, error);
    return false; // Indicate failed like request
  }
}

// Function to update the like counter
async function updateLikeCounter() {
  try {
    const response = await fetch(`${involvementApiEndpoint}/likes`);
    const data = await response.json();
    const likecounters = document.querySelectorAll('.like-counter');

    likecounters.forEach(likecounter => {
      const countryName = likecounter.dataset.country;
      console.log('Country Name:', countryName);
      const selectedItem = data.find(item => String(item.item_id).toLowerCase() === String(countryName).toLowerCase());
      console.log('Selected Item:', selectedItem);

      if (selectedItem) {
        likecounter.innerHTML = selectedItem.likes;
      } else {
        console.error(`Error: No corresponding item found for like counter of ${countryName}.`);
      }
    });
  } catch (error) {
    console.error('Error updating like counter:', error);
  }
}

document.addEventListener('DOMContentLoaded', fetchCountries);

document.addEventListener('click', async (event) => {
  if (event.target.classList.contains('icon-btn')) {
    const iconBtn = event.target;
    const countryName = iconBtn.getAttribute('data-country');
    try {
      const success = await sendLikeRequest({ name: countryName});
      if (success) {
        await updateLikeCounter();
      }
    } catch (error) {
      console.error(error);
    }
  }
});


