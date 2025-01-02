

const logoutBtn = document.getElementById('logoutBtn');
const studentList = document.getElementById('students');
const searchInput = document.getElementById('searchInput');
const studentDetails = document.getElementById('student-details');
const studentName = document.getElementById('student-name');
const studentEmail = document.getElementById('student-email');
const studentSummary = document.getElementById('student-summary');
const approveBtn = document.getElementById('approveBtn');
const rejectBtn = document.getElementById('rejectBtn');
const deleteBtn = document.getElementById('deleteBtn');
const backBtn = document.getElementById('backBtn');

// Example student data (this would normally come from a backend or database)
const students = [
    { id: 1, name: "John Doe", email: "john@example.com", summary: "A passionate software developer" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", summary: "A creative designer with a love for art" }
];

// Display students' data
function displayStudents() {
    studentList.innerHTML = '';
    students.forEach(student => {
        const studentItem = document.createElement('li');
        studentItem.textContent = student.name;
        studentItem.addEventListener('click', () => showStudentDetails(student));
        studentList.appendChild(studentItem);
    });
}

// Show individual student details
function showStudentDetails(student) {
    studentName.textContent = `Name: ${student.name}`;
    studentEmail.textContent = `Email: ${student.email}`;
    studentSummary.textContent = `Summary: ${student.summary}`;
    studentDetails.classList.remove('hidden');
}

// Back to student list
backBtn.addEventListener('click', () => {
    studentDetails.classList.add('hidden');
});

// Approve, reject, and delete buttons
approveBtn.addEventListener('click', () => {
    alert('Student approved!');
    // Add logic to approve the student data (e.g., update the status in the database)
});

rejectBtn.addEventListener('click', () => {
    alert('Student rejected!');
    // Add logic to reject the student data
});

deleteBtn.addEventListener('click', () => {
    alert('Student data deleted!');
    // Add logic to delete the student data (e.g., remove from database)
});

// Logout
logoutBtn.addEventListener('click', () => {
    alert('Logged out!');
    sessionStorage.removeItem("isAdminLoggedIn");
    window.location.href = "index.html"; // Redirect to the index page after logout
});

// Search students
searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase();
    const filteredStudents = students.filter(student => student.name.toLowerCase().includes(query));
    studentList.innerHTML = '';
    filteredStudents.forEach(student => {
        const studentItem = document.createElement('li');
        studentItem.textContent = student.name;
        studentItem.addEventListener('click', () => showStudentDetails(student));
        studentList.appendChild(studentItem);
    });
});




// Check if admin is logged in when accessing the admin page
if (sessionStorage.getItem("isAdminLoggedIn") !== "true") {
    // If not logged in, redirect to index.html (login page)
    window.location.href = "index.html";
}

// Logout functionality
const logoutButton = document.getElementById('logout-btn');
logoutButton.addEventListener('click', function () {
    // Remove admin login status from session storage
    sessionStorage.removeItem("isAdminLoggedIn");
    
    // Redirect back to login page (index.html)
    window.location.href = "index.html";
});





// Initialize the student list
displayStudents();
