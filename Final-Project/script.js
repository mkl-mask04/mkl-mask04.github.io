// Get the button
const returnToTopButton = document.getElementById("return-to-top");

// Show button when scrolling down
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    // Adjust threshold for visibility
    returnToTopButton.style.display = "block";
  } else {
    returnToTopButton.style.display = "none";
  }
});

// Scroll to top when clicked
returnToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scrolling effect
  });
});

// Get references to the hamburger icon, mobile menu, and close button
const hamMenu = document.getElementById("ham-menu");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");

// Open the menu when the hamburger icon is clicked
hamMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");

  // If the mobile menu is active, prevent scrolling on the body
  if (mobileMenu.classList.contains("active")) {
    document.body.style.overflow = "hidden"; // Prevent scrolling
    document.body.style.position = "fixed"; // Lock the position
    document.body.style.width = "100%"; // Ensure the body stays the same width
  } else {
    document.body.style.overflow = ""; // Re-enable scrolling
    document.body.style.position = ""; // Unlock the position
    document.body.style.width = ""; // Revert the width
  }
});

// Close the menu when the close button is clicked
closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  document.body.style.overflow = ""; // Re-enable scrolling
  document.body.style.position = ""; // Unlock the position
  document.body.style.width = ""; // Revert the width
});
