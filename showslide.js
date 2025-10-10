let slideIndex = 1;
showSlidesManual(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlidesManual(slideIndex += n);
}

// Show the current slide
function showSlidesManual(n) {
  const slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0; // hide all slides
  }
  slides[slideIndex - 1].style.opacity = 1; // show current slide
}

// Auto-slide every 5 seconds
setInterval(() => plusSlides(1), 5000);
