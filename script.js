const password = document.querySelector('#password');
const passwordConfirmation = document.querySelector('#password-confirmation');

function emptyFields() {
  if (password.value === '' || passwordConfirmation.value === '') {
    return true;
  }
}

function matchPassword() {
  if (password.value === passwordConfirmation.value) {
    return true;
  }
  return false;
}

function emptyFieldsError() {
  errorMessage = document.querySelector('#password-mismatch') || 
                 document.createElement('p');
  errorMessage.textContent = '* Password and Confirmation must not be empty';
  errorMessage.setAttribute('id', 'password-mismatch');
  errorMessage.style.cssText = "font-size: 0.7rem; font-weight: bold; \
                                font-family: Arial; color: red;";
  password.parentElement.appendChild(errorMessage);
}

function passwordMismatch() {
  password.classList.add('field-error');
  passwordConfirmation.classList.add('field-error');
}

passwordConfirmation.addEventListener('input', () => {
  if (emptyFields()) {
    emptyFieldsError();
  }
  else {
    errorMessage = document.querySelector('#password-mismatch');
    if (errorMessage) {
      errorMessage.remove();
    }
  }

  if (!matchPassword()) {
    passwordMismatch();
  }
  else {
    password.classList.toggle('field-error');
    passwordConfirmation.classList.toggle('field-error');
  }
})