// I am handling button click event
const colorButton = document.getElementById('colorButton');
colorButton.addEventListener('click', function() {
    this.style.backgroundColor = getRandomColor();
    this.innerHTML = "Clicked!";
});

// I am handling hover effects on the images in the gallery
const galleryImages = document.querySelectorAll('.gallery-item');
galleryImages.forEach(function(img) {
    img.addEventListener('mouseover', function() {
        this.style.transform = "scale(1.2)";
    });
    img.addEventListener('mouseout', function() {
        this.style.transform = "scale(1)";
    });
});

// I will detect keypress events to show a message
document.addEventListener('keypress', function(event) {
    console.log(`Key pressed: ${event.key}`);
});

// I am adding event listener to the form for validation
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // I prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // I validate the email format
    if (!validateEmail(email)) {
        alert("Please enter a valid email.");
        return;
    }

    // I check the password length
    if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    alert("Form Submitted Successfully!");
});

// I am using a function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// I am validating email format
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}
