// Dummy student and admin login functionality
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    if (role === 'student') {
        window.location.href = 'student-dashboard.html';
    } else if (role === 'admin') {
        window.location.href = 'admin-dashboard.html';
    } else {
        alert('Invalid credentials!');
    }
});

// Show Register Form
function showRegister() {
    document.getElementById('registerContainer').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
}

// Show Login Form
function showLogin() {
    document.getElementById('registerContainer').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

// Handle CLC Form Submission
document.getElementById('clcForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('applicationStatus').innerText = 'Submitted';
    alert('Your CLC application has been submitted.');
});

// Admin Actions (Approve/Reject)
function loadApplications() {
    const applicationTable = document.getElementById('applicationTable');
    applicationTable.innerHTML = `
        <tr>
            <td>John Doe</td>
            <td>12345</td>
            <td>B.Sc. Computer Science</td>
            <td>Personal Reasons</td>
            <td>Pending</td>
            <td><button onclick="approveApplication()">Approve</button> <button onclick="rejectApplication()">Reject</button></td>
        </tr>
    `;
}

function approveApplication() {
    alert('Application approved.');
}

function rejectApplication() {
    alert('Application rejected.');
}

window.onload = function() {
    if (window.location.pathname.includes('admin-dashboard.html')) {
        loadApplications}}
        