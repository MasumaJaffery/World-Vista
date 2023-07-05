const likebtn = document.querySelector('.icon-btn');
const likes = document.querySelector('.like-counter');
const likeitems = async() => {
    likebtn.addEventListener('click', () => {
     likes.innerHTML++;
    });
}
likeitems();