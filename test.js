// script.js

const slider = document.querySelector('.overflow-hidden');
const cards = document.querySelectorAll('.card');
let currentIndex = 0;

document.getElementById('next').onclick = function() {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateSliderPosition();
    }
};

document.getElementById('prev').onclick = function() {
    if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
    }
};

function updateSliderPosition() {
    const offset = currentIndex * -100; // Assuming each card takes full width
    slider.style.transform = `translateX(${offset}%)`;
}
