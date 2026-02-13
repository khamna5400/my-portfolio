// We wait for the form to be submitted
document.getElementById('contactForm').onsubmit = function() {
    // Change the button text so the user knows something is happening
    this.querySelector('button').innerText = "Sending...";
    // Optional: Disable the button to prevent double-clicks
    this.querySelector('button').disabled = true;
};
