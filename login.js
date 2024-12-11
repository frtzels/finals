document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Password strength checker function
    function isStrongPassword(password) {
        return password.length >= 8;
    }

    // Check if fields are empty
    if (!email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    // Validate email format
    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Check password strength
    if (!isStrongPassword(password)) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    // Log details (for debugging purposes)
    console.log("Email:", email);
    console.log("Password:", password);

    // Successful login lets go hehe
    alert("Login successful!");
    // Redirect or further logic here
});