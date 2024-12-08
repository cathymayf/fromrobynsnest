/**
 * Selects all images within grid items on the page.
 * @type {NodeListOf<HTMLImageElement>}
 */
const gridItems = document.querySelectorAll('.grid-item img');

/**
 * Modal container element that displays the enlarged image.
 * @type {HTMLElement}
 */
const modal = document.getElementById('image-modal');

/**
 * Image element within the modal used to display the enlarged view.
 * @type {HTMLImageElement}
 */
const modalImage = document.getElementById('modal-image');

/**
 * Close button element for the modal.
 * @type {HTMLElement}
 */
const closeModal = document.getElementById('close-modal');

/**
 * Adds a click event listener to each grid item image.
 * On click, the modal is displayed with the clicked image.
 */
gridItems.forEach(item => {
  /**
   * Event listener for image click to open the modal.
   * @param {MouseEvent} event - The click event object.
   */
  item.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImage.src = item.src;
  });
});

/**
 * Event listener for the close button to hide the modal.
 * On click, the modal is hidden.
 */
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

/**
 * Event listener for clicks on the modal background to hide the modal.
 * If the click is outside the modal image, the modal is hidden.
 * @param {MouseEvent} e - The click event object.
 */
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
