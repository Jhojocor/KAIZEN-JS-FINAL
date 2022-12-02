const passInput = document.getElementById('password');
const emailInput = document.getElementById('email');
const nameInput = document.getElementById('name');
const localStorage = window.localStorage;


let users = [];
let savedUsers = localStorage.getItem("users");
if(savedUsers !== null){
    users = JSON.parse(savedUsers)
}

function signUp(){
    if(passInput.value.length <= 5){
        alert('Debe contener por lo menos 6 carácteres');
        return;
    }

    let user = new User(
        nameInput.value,
        emailInput.value,
        passInput.value
    );
    users.push(user);
    let json = JSON.stringify(users);
    localStorage.setItem("users", json);
    window.location.replace = "login.html";
}