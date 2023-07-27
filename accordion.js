document.addEventListener('DOMContentLoaded', function() {
  // Add click event listener to each accordion item
  const accordionItems = document.querySelectorAll('.accordion-item');
  accordionItems.forEach(item => {
    item.querySelector('h3').addEventListener('click', () => {
      // Toggle the 'active' class to show/hide the accordion content
      item.classList.toggle('active');

      // Close other accordions when a new one is clicked
      if (item.classList.contains('active')) {
        accordionItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
          }
        });
      }
    });
  });
});
