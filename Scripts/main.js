const inputField = document.getElementById('input-field');
const inputButton = document.querySelector('.input-button');
const errorIcon = document.getElementById('error-icon');
const errorWarning = document.getElementById('error-warning');

inputButton.addEventListener('click', function() {

    if(inputField.value.length === 0) {
        invalidEmail();
        return false;
    }

    inputField.preventDefaul();

    if(validateEmail(inputField.value)) {
        inputField.removeAttribute('aria-invalid');
        inputField.removeAttribute('aria-describedBy');
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

    // Set visual elements
    inputField.style.borderColor = "red";
    errorIcon.style.display = "block";
    errorWarning.textContent = "Invalid Email";

    // Set aria attributes
    inputField.setAttribute('aria-invalid', true);
    inputField.setAttribute('aria-describedBy', errorWarning.textContent);
}