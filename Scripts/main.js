const inputField = document.getElementById('input-field');
const inputButton = document.querySelector('.input-button');
const errorIcon = document.getElementById('error-icon');
const errorWarning = document.getElementById('error-warning');

inputButton.addEventListener('click', function() {

    if(inputField.value.length === 0) {
        invalidEmail();
        return false;
    }

    if(validateEmail(inputField.value)) {
        return true;
    }
    else {
        invalidEmail();
    }
});


const validateEmail = function(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

const invalidEmail = function() {
    inputField.style.borderColor = "red";
    errorIcon.style.display = "block";
    errorWarning.textContent = "Invalid Email";
}