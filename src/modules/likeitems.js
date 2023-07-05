import './countries.js';
const appID = '0I1gsmjKECA6HGAxhWHM';
const baseAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
const likeURL = `${baseAPI}/${appID}/likes`;
const getlike = async() => {
  const response = await fetch(likeURL);
  const data = await response.json();
  console.log(data);
  const iconbtn = document.querySelectorAll('.icon-btn');
  iconbtn.forEach((btn, index) => {
    btn.addEventListener('click', async () => {
      const likecounter = document.querySelectorAll('.like-counter');
if (likecounter[index]) {
  likecounter[index].innerHTML = parseInt(likecounter[index].innerHTML) + 1;
  console.log('clicked');
}
//Send like to Api!
  });
});

}
getlike();