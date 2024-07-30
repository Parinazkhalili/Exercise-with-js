function calculate(){
   
    

    const weight = document.getElementById("weight").value;
    const wvalue =document.getElementById("weight-val").textContent = weight;

    const height = document.getElementById("height").value;
    const hvalue =document.getElementById("height-val").textContent = height;
    const result = document.getElementById("result");
     const bmi = (weight / Math.pow( (height/100), 2 )).toFixed(1);
    result.textContent = bmi;
    const status= document.getElementById("status");

    if(bmi < 16){
        status .innerHTML= "Severly Underweight";
        status.style.color = "#eb1e1e";
        
    }
    else if(bmi < 18.1){
        status .innerHTML="Underweight";
        status.style.color = "#ffc44d";
    }
    else if( bmi >= 18.1 && bmi <= 24.2 ){
        status .innerHTML= "Normal Weight";
        status.style.color = "#0be881";
    }
    else if( bmi >= 25 && bmi <= 29.5 ){
        status .innerHTML= "Overweight";
        status.style.color = "#e7eb1e";
    }
    
    else if( bmi >= 30 && bmi <= 34.8 ){
        status .innerHTML= "Obesity Class |";
        status.style.color = "#c45e04";
    }
    else{
        status .innerHTML= "Obesity Class ||";
        status.style.color = "#ff5e57";
    }
   
}


// form validation

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});


const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }
};



if(emailValue === '') {
    setError(email, 'Email is required');
} else if (!isValidEmail(emailValue)) {
    setError(email, 'Provide a valid email address');
} else {
    setSuccess(email);
}


if(passwordValue === '') { setError(password, 'Password is required');
} else if (passwordValue.length < 8 ) {
    setError(password, 'Password must be at least 8 character.')
} else {
    setSuccess(password);
}

if(password2Value === '') {
    setError(password2, 'Please confirm your password');
} else if (password2Value !== passwordValue) {
    setError(password2, "Passwords doesn't match");
} else {
    setSuccess(password2);
}


// countdown counter


           

 
  