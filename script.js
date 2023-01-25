//your code here
// Select all images
const images = document.querySelectorAll("img");

// Randomly arrange images every time the page reloads
for (let i = images.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [images[i], images[j]] = [images[j], images[i]];
}

// Variables to store the selected images
let selectedImage1;
let selectedImage2;

// Add click event listener to all images
images.forEach((image) => {
  image.addEventListener("click", (e) => {
    // Store the selected image
    if (!selectedImage1) {
      selectedImage1 = e.target;
    } else {
      selectedImage2 = e.target;
    }

    // Show the Reset button
    document.getElementById("reset").style.display = "block";

    // Show the Verify button if both images are selected
    if (selectedImage1 && selectedImage2) {
      document.getElementById("verify").style.display = "block";
    }
  });
});

// Add click event listener to the Verify button
document.getElementById("verify").addEventListener("click", () => {
  // Compare the selected images
  if (selectedImage1.className === selectedImage2.className) {
    // Show "You are a human. Congratulations!" message
    document.getElementById("para").innerHTML =
      "You are a human. Congratulations!";
    document.getElementById("para").style.display = "block";
  } else {
    // Show "We can't verify you as a human. You selected the non-identical tiles." message
    document.getElementById("para").innerHTML =
      "We can't verify you as a human. You selected the non-identical tiles.";
    document.getElementById("para").style.display = "block";
  }

  // Hide the Verify button and the Reset button
  document.getElementById("verify").style.display = "none";
  document.getElementById("reset").style.display = "none";

  // Clear the selected images
  selectedImage1 = null;
  selectedImage2 = null;
});

// Add click event listener to the Reset button
document.getElementById("reset").addEventListener("click", () => {
  // Hide the Reset button and the Verify button
  document.getElementById("reset").style.display = "none";
  document.getElementById("verify").style.display = "none";

  // Clear the selected images
  selectedImage1 = null;
  selectedImage2 = null;

  // Hide the message
  document.getElementById("para").style.display = "none";
});
