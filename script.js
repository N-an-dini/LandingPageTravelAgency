const contactForm= document.getElementById('contact-form');
const thankYouMessage = document.getElementById('thankyou-message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simulate form submission and show thank you message
    // In a real scenario, you would use AJAX or fetch to submit data to the server
    thankYouMessage.classList.remove('hidden');
    contactForm.reset();
});
