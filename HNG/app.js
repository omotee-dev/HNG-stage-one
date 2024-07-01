/*let sliderSlides = document.querySelectorAll('.slider-slide');
		let currentSlide = 0;
		
		document.querySelector('.next').addEventListener('click', () => {
			sliderSlides[currentSlide].classList.remove('active');
			currentSlide = (currentSlide + 1) % sliderSlides.length;
			sliderSlides[currentSlide].classList.add('active');
		});
		
		document.querySelector('.prev').addEventListener('click', () => {
			sliderSlides[currentSlide].classList.remove('active');
			currentSlide = (currentSlide - 1 + sliderSlides.length) % sliderSlides.length;
			sliderSlides[currentSlide].classList.add('active');
		});*/

        let slideIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = index;
  }
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(-${slideIndex * 100}%)`;
    if (i === slideIndex) {
      slide.style.opacity = 1;
    } else {
      slide.style.opacity = 0;
    }
  });
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

function prevSlide() {
  showSlide(slideIndex - 1);
}

// Automatic slide change (uncomment to enable)
// setInterval(nextSlide, 5000);

// Initial slide display
showSlide(slideIndex);

document.addEventListener('DOMContentLoaded', function() {
var now = new Date();
document.querySelector('[data-testid="currentTimeUTC"]').textContent = now.toISOString();

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var now = new Date();
document.querySelector('[data-testid="currentDay"]').textContent = days[now.getDay()];
});