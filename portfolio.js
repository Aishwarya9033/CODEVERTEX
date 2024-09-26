// Smooth scroll to different sections of the page when clicking on Navbar links
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Handle the form submission on the Contact Me section
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission behavior
    alert('Message sent successfully!'); // Show alert on successful form submission
});
