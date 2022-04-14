const passwordInput = document.getElementById("password");
const passwordConfirm = document.getElementById("confirm_password");
const passwordStatus = document.getElementById("invalidPassword");

function checkPassword() {
    if (passwordInput.value !== passwordConfirm.value) {
        passwordInput.classList.add('error');
        passwordConfirm.classList.add('error');
        passwordStatus.textContent = "Passwords do not match";
    }
    else {
        passwordInput.classList.remove('error');
        passwordConfirm.classList.remove('error');
        passwordStatus.innerHTML = "";
    }
}

passwordConfirm.addEventListener('change', checkPassword);