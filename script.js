// script.js

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Simple validation
            if (name && email && message) {
                alert(`Thank you, ${name}! Your message has been sent.`);
                contactForm.reset(); // Reset the form
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
});