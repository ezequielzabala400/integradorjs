const form = document.querySelector('.Form');
const inputText = document.querySelector('#inputText');
const inputEmail = document.querySelector('#inputEmail');
const inputPassword = document.querySelector('#inputPassword');
const inputRepeatPassword = document.querySelector('#inputRepeatPassword');

const EMAIL_REGEX = /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;



const isEmpty = value => value === 0;

const isEmailValid = email => EMAIL_REGEX.test(email);

const isPasswordValid = password => PASSWORD_REGEX.test(password);

const checkText = input => {
    let valid = false;
    let min = 4;
    let max = 20;
    const inputValue = inputText.value.trim();
    if(isEmpty(inputValue.length)){
        showError(input, 'El nombre de usuario es obligatorio');
        return
    }else if(inputValue.length < min || inputValue.length > max){
        showError(input, 'El nombre de usuario debe contener entre 4 y 30 carácteres')
        return
    }else{
        cleanError(input)
        valid = true
    }
    return valid;
}

const checkEmail = input => {
    let valid = false;
    const emailValue = inputEmail.value.trim();
    if(isEmpty(emailValue.length)){
        showError(input, 'El correo es obligatorio');
        return
    }else if(!isEmailValid(emailValue)){
        showError(input, 'El correo no es válido');
        return
    }else{
        cleanError(input);
        valid = true;
    }
    return valid;
}

const checkPassword = input => {
    let valid = false;
    const passwordValue = inputPassword.value.trim();
    if(isEmpty(passwordValue.length)){
        showError(input, 'La contraseña es obligatoria')
        return
    }else if(!isPasswordValid(passwordValue)){
        showError(input, 'La contraseña debe tener más de 8 carácteres y contener mayúsculas, símbolos y números')
        return
    }else{
        cleanError(input)
        valid = true;
    }
    return valid
}

const checkRepeatPassword = input => {
    let valid = false;
    const repeatPasswordValue = inputRepeatPassword.value.trim();
    if(isEmpty(repeatPasswordValue.length)){
        showError(input, 'Ingrese denuevo la contraseña')
        return
    }else if(repeatPasswordValue !== inputPassword.value.trim()){
        showError(input, 'Las contraseñas no son iguales')
    }else{
        cleanError(input)
        valid = true;
    }
    return valid;
}


const showError = (input, message) => {
    input.classList.add('error')
    const inputContainer = input.parentElement;
    const fieldInput = inputContainer.querySelector('small');
    fieldInput.textContent = message;
}

const cleanError = input => {
    input.classList.remove('error')
    const inputContainer = input.parentElement;
    const fieldInput = inputContainer.querySelector('small');
    fieldInput.textContent = '';
}

const isFormValid = () => {
    const textValid = checkText(inputText);
    const emailValid = checkEmail(inputEmail);
    const passwordValid = checkPassword(inputPassword)
    const repeatPasswordValid = checkRepeatPassword(inputRepeatPassword)
    return textValid && emailValid && passwordValid && repeatPasswordValid;
}


    form.addEventListener('submit', e => {
        e.preventDefault();
        if(isFormValid()){
            alert('La cuenta fue creada con exito');
            form.submit();
        }
    })










