const form = document.getElementById('form');
const userName = document.getElementById('user_name');
const userEmail = document.getElementById('user_email');
const userPassword = document.getElementById('user_password');
const userConfirmPassword = document.getElementById('user_confirm_password');


const successText = document.getElementById('success-text');

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    
}

function checkInputs(){
    const userNameValue = userName.value.trim();
    const userEmailValue = userEmail.value.trim();
    const userPasswordValue = userPassword.value.trim();
    const userConfirmPasswordValue = userConfirmPassword.value.trim();

    if(userNameValue === ''){
        //show error
        // add error class;
        //console.log('Error');
        setErrorFor(userName, 'Username cannot be blank');
        return false;
    }else{
        // add success class
        setSuccessFor(userName);    
        
    }

    if(userEmailValue === ''){
        //show error
        // add error class;
        setErrorFor(userEmail,'Email cannot be blank');
        return false;
    }else if(!isEmail(userEmailValue)){
        setErrorFor(userEmail,'Not a valid email');
        return false;
    }
    else{
        // add success class
        setSuccessFor(userEmail); 
    }

    if(userPasswordValue === ''){
        //show error
        // add error class;
        setErrorFor(userPassword, 'Password is empty');
        return false;
    }
    else{
        // add success class
        setSuccessFor(userPassword); 
    }

    if(userConfirmPasswordValue === ''){
        //show error
        // add error class;
        setErrorFor(userConfirmPassword, 'Confirm Password is empty');
        return false;
    
    }else if(userPasswordValue !== userConfirmPasswordValue){
        setErrorFor(userConfirmPassword, 'Password do not match');
        return false;
    }
    else{
        // add success class
        setSuccessFor(userConfirmPassword);
    }

}


function printSuccess(){
    successText.style.visibility = 'visible';
    successText.style.color = 'green';
    successText.innerText = 'Successfully Inserted';
}

function printFieldMissing(){
    successText.style.visibility = 'visible';
    successText.style.color = 'red';
    successText.innerText = 'Fields are missing';
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    if(checkInputs() === false){
        // call method
        printFieldMissing();
        
    }else{
        // fields are missing;
        printSuccess();
        
    }
});