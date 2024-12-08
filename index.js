/**
 * Manages the slideshow functionality for the webpage.
 * @module Slideshow
 */

var currentIndex = 0; // Index of the currently displayed slide
var slides = document.querySelectorAll('#slideshow img');

/**
 * Displays a specific slide based on the given index.
 * Hides all other slides.
 * 
 * @function showSlide
 * @param {number} index - The index of the slide to display.
 */
function showSlide(index) {
    // Hide all slides
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    // Display the chosen slide
    slides[index].style.display = 'block';
}

/**
 * Advances the slideshow to the next slide.
 * If the current slide is the last one, it loops back to the first slide.
 * 
 * @function nextSlide
 */
function nextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
}

/**
 * Moves the slideshow to the previous slide.
 * If the current slide is the first one, it loops back to the last slide.
 * 
 * @function previousSlide
 */
function previousSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    showSlide(currentIndex);
}

// Initialize the slideshow by displaying the first slide
showSlide(currentIndex);

/**
 * Automatically transitions the slideshow to the next slide every 3 seconds.
 * 
 * @constant {number} interval - The time interval for slide transitions, in milliseconds.
 */
setInterval(nextSlide, 3000);
