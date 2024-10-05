const form = document.getElementById('form');
const passwd1 = document.getElementById('password1');
const passwd2 = document.getElementById('password2');
const messageCont = document.querySelector('.message-container');
const message = document.getElementById("message");


let isValid = false;
let passwordMatch = false;

function validateForm(){
    isValid = form.checkValidity();

    if (!isValid){
        message.textContent = "Please fill out all fields";
        message.style.color = "red";
        messageCont.style.borderColor = "red"
        return;
    }
    
    if (passwd1.value === passwd2.value){
        passwordMatch = true;
        passwd1.style.borderColor = "green";
        passwd2.style.borderColor = "green";
    } 

    else {
        passwordMatch = false;
        message.textContent = "Make sure password matches";
        message.style.color = "red";
        messageCont.style.borderColor = "red"
        passwd1.style.borderColor = "red";
        passwd2.style.borderColor = "red";
        return;
    }

    if (isValid && passwordMatch){
        message.textContent = "Successfully Registered"
        message.style.color = "green";
        messageCont.style.borderColor = "green";
    }
}

function storeFormData(){
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    }
    console.log(user);
}

function processFormData(e){
    e.preventDefault();
    validateForm();
    if (isValid && passwordMatch){
        storeFormData();
    }
}

form.addEventListener("submit", processFormData);




