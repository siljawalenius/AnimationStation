const slides = document.querySelectorAll(".slideshow");

slides.forEach((slide) => {
  let current = 0;
  let z = 1000000000;

  const images = slide.querySelectorAll("img");

  images.forEach((image) => {
    z = z - 1;
    image.style.zIndex = z;
  });

  slide.addEventListener("click", function () {
    z--;

    images[current].style.zIndex = z;

    current++;

    if (current >= images.length) {
      current = 0;
    }
  });
});
