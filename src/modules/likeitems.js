import './countries.js';
const appID = 'abcdefg';
const baseAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
const likeURL = `${baseAPI}/${appID}/likes`;
const getlike = async() => {
  const response = await fetch(likeURL);
  await response.json();
  const iconbtn = document.querySelectorAll('.icon-btn');
  const  likecounter = document.querySelectorAll('.like-counter');
  iconbtn.forEach((btn) => {
    btn.addEventListener('click', async () => {
    likecounter.innerHTML += 1;
    console.log('clicked');
    })
  });
}
getlike();