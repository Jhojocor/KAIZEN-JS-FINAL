const passInput = document.getElementById('passLog');
const emailInput = document.getElementById('emailLog');

let currentUser = localStorage.getItem("currentUser");
if(currentUser !== null){
    window.location.href = "mainp.html"
}

function login(){

    var passInput = document.getElementById('passLog');
    var emailInput = document.getElementById('emailLog');

    let json = localStorage.getItem("users");
    if(json !== null){
        let users = JSON.parse(json);
        console.log(users);
        let email = emailInput.value;
        let pass = passInput.value;
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === email) {
                if (users[i].pass === pass) {
                    window.location.href = "mainp.html";
                    let currentUser = JSON.stringify(users[i]);
                    localStorage.setItem("currentUser", currentUser);
                    return;
                }else{
                    alert('contraseña invalida')
                    return;
                }
            }
            
        }
    }
    alert('No estás resgistrado aún')
}

