document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form values
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    // Read login.json and check for authentication
    fetch('login.json')
        .then(response => response.json())
        .then(data => {
            // Check if any user in the JSON matches the entered credentials
            var loggedIn = false;
            data.forEach(userData => {
                if (userData.username === username && userData.email === email && encodePassword(password) === userData.password_encoded_id) {
                    loggedIn = true;
                }
            });

            if (loggedIn) {
                alert('Login successful!');
                window.location.href = 'apamenu.html'; // Redirect to menu page
            } else {
                alert('Login failed. Please check your credentials.');
            }
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
});

function encodePassword(password) {
    return btoa(password); // Base64 encoding
}

function goToGuestMode() {
    window.location.href = 'apamenu.html'; // Redirect to guest mode page
}

function goToSignUp() {
    window.location.href = 'signup.html'; // Redirect to sign up page
}
