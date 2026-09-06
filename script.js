let name = "sami"
let pass = "1234"

let username = document.querySelector('#username');
let password = document.querySelector('#password');
let submit = document.querySelector('#get-started');

submit.addEventListener('click', function(){
    if(username.value === name && password.value === pass){
        document.querySelector('#login-page').hidden = true;
        document.querySelector('#dashboard').hidden = false;
    }
})