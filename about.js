/**
 * Handles the interactive image functionality for the "About Us" page.
 * 
 * This script enables hover and click effects on the image, allowing
 * the image to enlarge when hovered over or clicked.
 * 
 * @module InteractiveImage
 */

// Select the image element
const image = document.getElementById('enlargeable-image');

/**
 * Adds a CSS class to enlarge the image on hover.
 * 
 * @event mouseenter
 * @listens mouseenter
 */
image.addEventListener('mouseenter', () => {
  image.classList.add('hover-enlarge');
});

/**
 * Removes the CSS class to reset the image size when the hover ends.
 * 
 * @event mouseleave
 * @listens mouseleave
 */
image.addEventListener('mouseleave', () => {
  image.classList.remove('hover-enlarge');
});

/**
 * Toggles a CSS class to enlarge the image when clicked.
 * Clicking again will restore the original size.
 * 
 * @event click
 * @listens click
 */
image.addEventListener('click', () => {
  if (image.classList.contains('click-enlarge')) {
    image.classList.remove('click-enlarge');
  } else {
    image.classList.add('click-enlarge');
  }
});
