const loginButton = document.getElementById("login-btn");
const logButton = document.getElementById('log-btn');
const loginFormContainer = document.getElementById("login-form-container");

loginButton.addEventListener("click", () => {
    loginFormContainer.classList.add("active");
});

logButton.addEventListener("click", () => {
    loginFormContainer.classList.remove("active");
});