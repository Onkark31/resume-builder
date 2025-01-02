const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const showSignup = document.getElementById('showSignup');
const showLogin = document.getElementById('showLogin');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');

// Switch to signup form
showSignup.addEventListener('click', function() {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('signup-form').classList.remove('hidden');
});

// Switch to login form
showLogin.addEventListener('click', function() {
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
});

// Login form submission
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Basic validation (for now, you can later integrate with a backend)
    if (email && password) {
        alert("Login successful!");
        // Redirect or take appropriate action after successful login
    } else {
        alert("Please fill all fields!");
    }
});

// Signup form submission
signupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Basic validation (for now, you can later integrate with a backend)
    if (name && email && password) {
        alert("Signup successful!");
        // Redirect or take appropriate action after successful signup
    } else {
        alert("Please fill all fields!");
    }
});
