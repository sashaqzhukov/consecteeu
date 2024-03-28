function addClass(element, className) {
  // Check if the element has a classList property
  if (element.classList) {
    // Add the class to the element
    element.classList.add(className);
  }
}
