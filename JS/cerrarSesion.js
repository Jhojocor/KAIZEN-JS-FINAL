let currentUser = localStorage.getItem("currentUser");

function cerrarSesion(){
    if(localStorage !== null){
        window.localStorage.removeItem("currentUser");
        window.location.href = "login.html";
    }
}