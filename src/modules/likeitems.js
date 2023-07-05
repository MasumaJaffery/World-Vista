import './countries.js';
const id = 'abcdefg';
const baseAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
const likeURL = `${baseAPI}/${id}/likes`;
const iconbtn = document.querySelector('.icon-btn');
const likecounter = document.querySelector('.like-counter');

const getLikes = async () => {
  try {
    const result = await fetch(likeURL);
    const data = await result.json();
    return data;
  } catch (error) {
    return {
      Response: 'False',
      Error: error.message || 'Unexpected error',
    };
  }
};

const updateLikeCounter = async () => {
  const likesData = await getLikes();
  likecounter.innerHTML = likesData.length;
};

// Event listener for adding likes
iconbtn.addEventListener('click', async () => {
  try {
    const response = await fetch(likeURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        item_id: id,
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
});

// Call updateLikeCounter on initial page load
updateLikeCounter();

export const loadLikes = async () => {
  // Load likes data
  const likesData = await getLikes();
  return likesData;
};

export const sendLike = async (itemId) => {
  try {
    const response = await fetch(likeURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        item_id: itemId,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return {
      Response: 'False',
      Error: error.message || 'Unexpected error',
    };
  }
};

