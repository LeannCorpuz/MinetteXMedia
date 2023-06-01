let currentImageIndex = 0;
const images = document.querySelectorAll('#slideshow img');

function changeImage() {
  for (let i = 0; i < images.length; i++) {
    if (i === currentImageIndex) {
      images[i].style.opacity = 1;
    } else {
      images[i].style.opacity = 0;
    }
  }

  currentImageIndex = (currentImageIndex + 1) % images.length;
}

setInterval(changeImage, 3000);
