const involvementApiEndpoint = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FjhFMUdws0lCxR3eXCdS';
const baseApiEndpoint = 'https://restcountries.com/v2/all';

// Fetch data from the base API and the Involvement API
async function fetchData() {
  try {
    const [baseApiResponse, involvementApiResponse] = await Promise.all([
      fetch(baseApiEndpoint),
      fetch(`${involvementApiEndpoint}/likes`),
    ]);

    const baseApiData = await baseApiResponse.json();
    const involvementApiData = await involvementApiResponse.json();

    // Combine the data from the base API and Involvement API as per your requirements
    const combinedData = combineData(baseApiData, involvementApiData);

    // Update the screen with the combined data
    updateScreen(combinedData);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Function to combine data from the base API and the Involvement API
function combineData(baseApiData, involvementApiData) {
  // Combine the data from the base API and the Involvement API as per your requirements
  // For example, you can map over the baseApiData and add the corresponding like count from the involvementApiData
  const combinedData = baseApiData.map(item => {
    const likeData = involvementApiData.find(likeItem => likeItem.item_id === item.name.common);
    const likes = likeData ? likeData.likes : 0;

    return {
      ...item,
      likes,
    };
  });

  return combinedData;
}

// Function to update the screen with the combined data
function updateScreen(data) {
  const iconButtons = document.querySelectorAll('.icon-btn');
  const likeCounters = document.querySelectorAll('.like-counter');

  // Iterate over the icon buttons and like counters to update their data and event listeners
  iconButtons.forEach((iconButton, index) => {
    const countryName = iconButton.getAttribute('data-country');

    // Update the data-country attribute of the icon button and like counter
    iconButton.dataset.country = countryName;
    likeCounters[index].dataset.country = countryName;

    // Add event listener to the icon button for recording the like
    iconButton.addEventListener('click', async () => {
      try {
        const success = await sendLikeRequest(countryName);
        if (success) {
          await updateLikeCounters(); // Update the like counters after the like request is sent
        }
      } catch (error) {
        console.error(error);
      }
    });
  });

  // Update the like counter values
  likeCounters.forEach(likeCounter => {
    const countryName = likeCounter.getAttribute('data-country');
    const item = data.find(item => item.name.common === countryName);
    likeCounter.textContent = item ? item.likes : 0;
  });
}

// Function to send a POST request to the Involvement API when the Like button is clicked
async function sendLikeRequest(countryName) {
  try {
    const response = await fetch(`${involvementApiEndpoint}/likes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: countryName,
      }),
    });

    if (response.ok) {
      console.log('Like added for item:', countryName);

      // Save the like count in localStorage
      const likeData = JSON.parse(localStorage.getItem(countryName)) || {};
      likeData.likes = (likeData.likes || 0) + 1;
      localStorage.setItem(countryName, JSON.stringify(likeData));

      return true; // Indicate successful like request
    } else {
      console.error('Failed to like item:', countryName);
      return false; // Indicate failed like request
    }
  } catch (error) {
    console.error('Error liking item:', countryName, error);
    return false; // Indicate failed like request
  }
}

// Function to update the like counters
async function updateLikeCounters() {
  try {
    const involvementApiResponse = await fetch(`${involvementApiEndpoint}/likes`);
    const involvementApiData = await involvementApiResponse.json();

    const likeCounters = document.querySelectorAll('.like-counter');

    likeCounters.forEach(likeCounter => {
      const countryName = likeCounter.getAttribute('data-country');
      const likeData = involvementApiData.find(likeItem => likeItem.item_id === countryName);
      const likes = likeData ? likeData.likes : 0;

      // Update the like counter on the screen
      likeCounter.textContent = likes;

      // Update the like count in localStorage
      const storedLikes = JSON.parse(localStorage.getItem(countryName)) || {};
      storedLikes.likes = likes;
      localStorage.setItem(countryName, JSON.stringify(storedLikes));
    });
  } catch (error) {
    console.error('Error updating like counters:', error);
  }
}

// Call the fetchData function on page load
document.addEventListener('DOMContentLoaded', () => {
  // Fetch the like count from localStorage and update the like counters
  updateLikeCounters();

  // Fetch data from APIs and update the screen
  fetchData();
});

