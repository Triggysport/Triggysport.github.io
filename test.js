// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  // Select the element
  const button = document.querySelector(".trgyBtn.shine");

  // Check if the element exists
  if (button) {
    button.textContent = "Bet Now";
  } else {
    console.warn("Element with class 'trgyBtn shine' not found.");
  }
});
