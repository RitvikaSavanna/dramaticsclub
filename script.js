document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.getElementById('gallery');
    const galleryContainer = document.getElementById('gallery-container');

    // Get scroll amount dynamically
    const scrollAmount = galleryContainer.clientWidth;

    function scrollGallery(direction) {
        gallery.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }

    // Attach the function to global scope for buttons
    window.scrollGallery = scrollGallery;
});
function scrollGallery(direction) {
    const gallery = document.getElementById('gallery');
    const scrollAmount = gallery.clientWidth; // Scroll by the width of the visible area
    gallery.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}
let scrollInterval;

function startScrolling(direction) {
    const gallery = document.getElementById("gallery");

    // Start scrolling in the specified direction
    scrollInterval = setInterval(() => {
        gallery.scrollLeft += direction * 5; // Adjust speed by changing the value (5)
    }, 10); // Adjust interval duration for smoothness
}

function stopScrolling() {
    clearInterval(scrollInterval); // Stop scrolling
}

const scrollAmount = galleryContainer.offsetWidth; /* Dynamically get container width */
// script.js
function scrollGallery(direction) {
    const gallery = document.getElementById('gallery');
    const scrollAmount = 200; // adjust this value for faster/slower scroll
    gallery.scrollBy({
        left: direction * scrollAmount, // scrolling in the specified direction
        behavior: 'smooth'
    });
}
// JavaScript Form Validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Simple validation for empty fields
    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
        event.preventDefault();
    } else {
        alert("Thank you for contacting us! We will get back to you soon.");
    }
});
