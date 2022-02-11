const inputEmailField = document.getElementById('input-email');
const inputPasswordField = document.getElementById('input-password');
const loginButton = document.getElementById('btn-login');
const emailStatus = document.getElementById('invalid-email-message');
const passwordStatus = document.getElementById('invalid-password-message');
const loginStatus = document.getElementById('login-message');

//login button handler
loginButton.onclick = () => {
    const userEmail = inputEmailField.value;
    const userPassword = inputPasswordField.value;
    if(userEmail.replace(/\s/g, "")  == "" || !userEmail.includes('@')){
        emailStatus.innerText = "Please enter a valid email address !"
        inputEmailField.style.border = '1px solid red';
    }
    else if(userPassword.replace(/\s/g, "")  == ""){
        passwordStatus.innerText = 'Please enter a password first !';
        inputPasswordField.style.border = '1px solid red';
    }
    else {
        const defaultUser = 'info@bc.com';
        const defaultPassword = "infobc";
        if(userEmail == defaultUser && userPassword == defaultPassword){
            console.log('login successful');
            window.location.href = 'banking.html';
        }
        else {
            loginStatus.innerText = 'Incorect ! try again';
            inputEmailField.style.border = '1px solid red';
            inputPasswordField.style.border = '1px solid red';
        }
    }
}

//updating styles of input box dynamically
inputEmailField.onkeyup = () => inputEmailField.style.border = 'none';
inputPasswordField.onkeyup = () => inputPasswordField.style.border = 'none';