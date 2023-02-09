const PASSWORD = document.getElementById('password');
const PASSWORD_CONFIRM = document.getElementById('password-confirm');
const PASSWORD_ERROR_MESSAGE = document.getElementById('password-error-message');

PASSWORD.className = 'error';
PASSWORD_CONFIRM.className = 'error';

let passwordValue;
let passwordValueConfirm;

function checkPassword(passwordValue, passwordValueConfirm) {
  if (passwordValue === passwordValueConfirm) {
    if (passwordValue !== '') {
      PASSWORD.className = ''
      PASSWORD_CONFIRM.className = ''
      PASSWORD_ERROR_MESSAGE.style.visibility = 'hidden';
    }
  } else {
    PASSWORD_ERROR_MESSAGE.style.visibility = 'visible';
    PASSWORD.className = 'error';
    PASSWORD_CONFIRM.className = 'error';
  }
}

PASSWORD.oninput = (e) => {
  passwordValue = e.target.value;
  checkPassword(passwordValue, passwordValueConfirm);
}

PASSWORD_CONFIRM.oninput = (e) => {
  passwordValueConfirm = e.target.value;
  checkPassword(passwordValue, passwordValueConfirm);
}