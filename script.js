document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for reaching out! Your message has been sent.');
            form.reset();
        });
    }
});
