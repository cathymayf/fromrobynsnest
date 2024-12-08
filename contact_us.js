/**
 * Handles the slideshow functionality for the "Contact Us" page.
 * 
 * This script enables an image slideshow that cycles through a set of images.
 * The slideshow starts automatically and transitions between images every 3 seconds.
 * It also allows navigation through the images using the next and previous slide functions.
 * 
 * @module Slideshow
 */

// Select all images within the slideshow container
var currentIndex = 0;
var slides = document.querySelectorAll('#slideshow img');

/**
 * Displays the image at the given index and hides the others.
 * 
 * @function showSlide
 * @param {number} index - The index of the image to display.
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
 * Moves to the next slide in the slideshow.
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
 * Moves to the previous slide in the slideshow.
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

// Show the first slide initially
showSlide(currentIndex);

// Automatically transition to the next slide every 3 seconds
setInterval(nextSlide, 3000);
