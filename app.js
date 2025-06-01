const imageList = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
const profileImg = document.getElementById('cvImage');
let index = 1;

profileImg.addEventListener('click', () => {
  profileImg.style.opacity = '0';

  setTimeout(() => {
    profileImg.src = 'images/' + imageList[index];
    profileImg.style.opacity = '1';
    index = (index + 1) % imageList.length;
  }, 200);
});
