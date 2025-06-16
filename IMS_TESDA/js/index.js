document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    // Handle form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('rememberMe').checked;

        // Validate and process login
        if (validateLogin(username, password)) {
            // Store remember me preference if checked
            if (rememberMe) {
                localStorage.setItem('rememberedUser', username);
            } else {
                localStorage.removeItem('rememberedUser');
            }

            // In a real app, send credentials to server for validation
            // For this example, simulate successful login
            alert('Login successful!');
            // In real app: window.location.href = 'dashboard.html';
        } else {
            alert('Invalid username or password');
        }
    });

    // Check if user was remembered
    function checkRememberedUser() {
        const rememberedUser = localStorage.getItem('rememberedUser');
        if (rememberedUser) {
            document.getElementById('username').value = rememberedUser;
            document.getElementById('rememberMe').checked = true;
        }
    }

    // Basic validation
    function validateLogin(username, password) {
        // In a real app, validate against server
        // This is a simple placeholder validation
        return username.length > 0 && password.length > 0;
    }

    // Initialize
    checkRememberedUser();
});
