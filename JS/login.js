const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const role = document.getElementById("role").value;
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const errorMessage = document.getElementById("errorMessage");

    errorMessage.textContent = "";


    // Check role
    if (role === "") {
        errorMessage.textContent = "Please select your role.";
        return;
    }


    // Check username
    if (username === "") {
        errorMessage.textContent = "Please enter your Roll Number or Email.";
        return;
    }


    // Check password
    if (password === "") {
        errorMessage.textContent = "Please enter your password.";
        return;
    }


    // TEMPORARY LOGIN
    // Any filled credentials will work for now.

    console.log("Login successful");


    // Open dashboard
    window.location.href = "./dashboard.html";

});