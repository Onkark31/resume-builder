// Updated admin login credentials
const adminUsername = "Onkar";
const adminPassword = "osk1537";

// Select DOM elements
const adminLoginButton = document.getElementById('admin-login-btn');
const adminLoginForm = document.getElementById('admin-login-form');
const loginForm = document.getElementById('admin-login');
const adminLinkContainer = document.getElementById('admin-link-container');
const closeLoginBtn = document.getElementById('close-login-btn');

// Open admin login form when the button is clicked
adminLoginButton.addEventListener('click', function () {
    adminLoginForm.style.display = "block";  // Show login form
});

// Close admin login form when the close button is clicked
closeLoginBtn.addEventListener('click', function () {
    adminLoginForm.style.display = "none";  // Hide login form
});

// Handle login form submission
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === adminUsername && password === adminPassword) {
        // Show Admin Link
        adminLinkContainer.style.display = "block";
        
        // Hide the Login Form
        adminLoginForm.style.display = "none";

        // Store admin login status in session
        sessionStorage.setItem("isAdminLoggedIn", "true");
        
        // Redirect to Admin Page
        window.location.href = "admin.html";  // Redirect to admin page
    } else {
        alert("Invalid credentials!");
    }
});

// Check if admin is logged in on page load
if (sessionStorage.getItem("isAdminLoggedIn") === "true") {
    adminLinkContainer.style.display = "block";
    adminLoginForm.style.display = "none";
}







let userInfo = {
    name: '',
    email: '',
    phone: '',
    photo: null,
    summary: '',
    education: '',
    experience: '',
    skills: '',
    hobbies: ''
};

const messages = document.getElementById('messages');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const generateResumeBtn = document.getElementById('generateResumeBtn');
const resumeOutput = document.getElementById('resumeOutput');
const resumeForm = document.getElementById('resumeForm');
const formInputDiv = document.getElementById('formInput');
const chatbotDiv = document.getElementById('chatbot');
const inputOptionsDiv = document.getElementById('input-options');

let currentStep = 0;

const chatbotQuestions = [
    "What is your full name?",
    "What is your email address?",
    "What is your phone number?",
    "Upload your photo.",
    "Write a short summary or objective about yourself.",
    "Tell me about your education.",
    "Do you have any work experience? Please share details.",
    "What are your skills?",
    "What are your hobbies & interests?"
];

function showMessage(message, isBot = true) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.classList.add(isBot ? 'bot-message' : 'user-message');
    messages.appendChild(messageDiv);
    messages.scrollTop = messages.scrollHeight;
}

function handleUserInput() {
    const input = userInput.value;
    if (!input) return;

    showMessage(input, false);
    storeUserData(input);

    userInput.value = '';

    if (currentStep < chatbotQuestions.length) {
        showMessage(chatbotQuestions[currentStep]);
    } else {
        showMessage("All your details are collected! You can now generate your resume.");
        generateResumeBtn.style.display = 'inline-block';
    }
}

function storeUserData(input) {
    if (currentStep === 0) userInfo.name = input;
    if (currentStep === 1) userInfo.email = input;
    if (currentStep === 2) userInfo.phone = input;
    if (currentStep === 3) userInfo.photo = input;  // For the photo, we'll handle it differently
    if (currentStep === 4) userInfo.summary = input;
    if (currentStep === 5) userInfo.education = input;
    if (currentStep === 6) userInfo.experience = input;
    if (currentStep === 7) userInfo.skills = input;
    if (currentStep === 8) userInfo.hobbies = input;
    currentStep++;
}

function showForm() {
    formInputDiv.classList.remove('hidden');
    inputOptionsDiv.classList.add('hidden');
}

function showChatbot() {
    chatbotDiv.classList.remove('hidden');
    inputOptionsDiv.classList.add('hidden');
    showMessage(chatbotQuestions[currentStep]);
    currentStep++;
}

document.getElementById('formInputBtn').addEventListener('click', showForm);
document.getElementById('chatInputBtn').addEventListener('click', showChatbot);

sendBtn.addEventListener('click', handleUserInput);

resumeForm.addEventListener('submit', function(event) {
    event.preventDefault();
    userInfo.name = document.getElementById('name').value;
    userInfo.email = document.getElementById('email').value;
    userInfo.phone = document.getElementById('phone').value;
    userInfo.summary = document.getElementById('summary').value;
    userInfo.education = document.getElementById('education').value;
    userInfo.experience = document.getElementById('experience').value;
    userInfo.skills = document.getElementById('skills').value;
    userInfo.hobbies = document.getElementById('hobbies').value;

    showMessage("All your details are collected! You can now generate your resume.");
    generateResumeBtn.style.display = 'inline-block';
});

generateResumeBtn.addEventListener('click', generateResume);

function generateResume() {
    const resumeContent = `
        <div style="display: flex; align-items: center; justify-content: center;">
            ${userInfo.photo ? `<img src="${userInfo.photo}" alt="Profile Photo">` : ''}
            <div>
                <h2>${userInfo.name}</h2>
                <p><strong>Email:</strong> ${userInfo.email}</p>
                <p><strong>Phone:</strong> ${userInfo.phone}</p>
            </div>
        </div>
        
        <h3>Summary/Objective</h3>
        <p>${userInfo.summary}</p>

        <h3>Education</h3>
        <p>${userInfo.education}</p>

        <h3>Work Experience</h3>
        <p>${userInfo.experience}</p>

        <h3>Skills</h3>
        <p>${userInfo.skills}</p>

        <h3>Hobbies & Interests</h3>
        <p>${userInfo.hobbies}</p>
    `;
    
    resumeOutput.innerHTML = resumeContent;
    generatePDF(resumeContent);
}

 

function generatePDF(resumeContent) {
    const doc = new jsPDF();
    doc.setFont("times");
    
    doc.text(resumeContent, 10, 10);
    doc.save("resume.pdf");
}





// Updated admin login credentials
