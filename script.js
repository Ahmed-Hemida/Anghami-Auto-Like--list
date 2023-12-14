// Get all SVG elements with the specified title attribute
const svgElements = document.querySelectorAll('svg[title="like"]');

// Trigger click event on the parent anghami-icon elements
svgElements.forEach(svg => {
  const anghamiIcon = svg.closest('anghami-icon');
  if (anghamiIcon) {
    anghamiIcon.click();
  }
});
