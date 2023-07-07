const appId = 'qYk4MmxOGQlkjli4wjeP';

const updateLikeCounter = async () => {
  const countries = document.querySelectorAll('.country');
  countries.forEach(async (country) => {
    const likeButton = country.querySelector('.btn-like');
    const likeCounter = country.querySelector('.like-counter');
    const countryId = likeButton.getAttribute('data-country');

    try {
      const response = await fetch(
        `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes?item_id=${countryId}`
      );
      const likesData = await response.json();
      likeCounter.textContent = likesData.length;
    } catch (error) {
      console.log('Error:', error);
    }
  });
};

const sendLike = async (countryId) => {
  try {
    const response = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: countryId,
        }),
      }
    );

    if (response.ok) {
      return {
        success: true,
      };
    } else {
      return {
        success: false,
      };
    }
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: error.message || 'Unexpected error',
    };
  }
};

export const attachLikeEventListeners = () => {
  const likeButtons = document.querySelectorAll('.btn-like');

  likeButtons.forEach((button) => {
    const likeCounter = button.nextElementSibling;

    button.addEventListener('click', async () => {
      const countryId = button.getAttribute('data-country');
      const response = await sendLike(countryId);
      if (response.success) {
        const updatedLikesData = await updateLikeCounter(); 
        const countryLikes = updatedLikesData.filter(
          (like) => like.item_id === countryId
        );
        likeCounter.textContent = countryLikes.length;
      } else {
        console.error('Failed to send like');
      }
    });
  });
};

// Call updateLikeCounter on initial page load
updateLikeCounter();

// Attach event listeners to like buttons
attachLikeEventListeners();
