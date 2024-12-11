document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value; // Add a confirm password field

    // Name validation function
    function isValidName(name) {
        return name.length >= 3;
    }

    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Password strength checker function
    function isStrongPassword(password) {
        return password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password);
    }

    // Check if fields are empty
    if (!name || !email || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
    }

    // Validate name
    if (!isValidName(name)) {
        alert("Name must be at least 3 characters long.");
        return;
    }

    // Validate email format
    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Check password strength
    if (!isStrongPassword(password)) {
        alert("Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, and a number.");
        return;
    }

    // Confirm password match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Log details (for debugging purposes)
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    // Successful registration 🙂
    alert("Registration successful!");
    // Redirect or further logic here
});