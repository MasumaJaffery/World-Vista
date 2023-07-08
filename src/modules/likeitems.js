const involvementApiEndpoint =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/FjhFMUdws0lCxR3eXCdS';
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

    const combinedData = combineData(baseApiData, involvementApiData);
    updateScreen(combinedData);
  } catch (error) {
    return error.message;
  }
}

// Function to combine data from the base API and the Involvement API
function combineData(baseApiData, involvementApiData) {
  const combinedData = baseApiData.map((item) => {
    const likeData = involvementApiData.find(
      (likeItem) => likeItem.item_id === item.name.common
    );
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
  iconButtons.forEach((iconButton, index) => {
    const countryName = iconButton.getAttribute('data-country');
    iconButton.dataset.country = countryName;
    likeCounters[index].dataset.country = countryName;
    iconButton.addEventListener('click', async () => {
      try {
        const success = await sendLikeRequest(countryName);
        if (success) {
          iconButton.classList.toggle('liked');
          await updateLikeCounters();
        }
      } catch (error) {
        return error.message;
      }
    });
  });

  // Update the like counter values
  likeCounters.forEach((likeCounter) => {
    const countryName = likeCounter.getAttribute('data-country');
    const item = data.find((item) => item.name.common === countryName);
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
      const likeData = JSON.parse(localStorage.getItem(countryName)) || {};
      likeData.likes = (likeData.likes || 0) + 1;
      localStorage.setItem(countryName, JSON.stringify(likeData));

      return true;
    } else {
      console.error('Failed to like item:', countryName);
      return false;
    }
  } catch (error) {
    return error.message;
  }
}

// Function to update the like counters
async function updateLikeCounters() {
  try {
    const involvementApiResponse = await fetch(
      `${involvementApiEndpoint}/likes`
    );
    const involvementApiData = await involvementApiResponse.json();

    const likeCounters = document.querySelectorAll('.like-counter');

    likeCounters.forEach((likeCounter) => {
      const countryName = likeCounter.getAttribute('data-country');
      const likeData = involvementApiData.find(
        (likeItem) => likeItem.item_id === countryName
      );
      const likes = likeData ? likeData.likes : 0;
      likeCounter.textContent = likes;
      const storedLikes = JSON.parse(localStorage.getItem(countryName)) || {};
      storedLikes.likes = likes;
      localStorage.setItem(countryName, JSON.stringify(storedLikes));
    });
  } catch (error) {
    return error.message;
  }
}

// Call the fetchData function on page load
document.addEventListener('DOMContentLoaded', async () => {
  // Fetch data from APIs and update the screen
  await fetchData();
  updateLikeCounters();
});
