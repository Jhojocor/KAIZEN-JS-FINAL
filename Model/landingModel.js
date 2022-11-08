class Contanedor{
    constructor(bienvenida, descripcion){
        this.bienvenida = bienvenida;
        this.descripcion = descripcion;
    }
    renderContanedor(){
        Contendorimg.innerHTML = `
            <div id="letras">
                <div class="arreglo">
                    <h2>${this.bienvenida}</h2>
                </div>
                <p>${this.descripcion}<p>
                <div class="final">
                    <li id="botones"><a href="./register.html">Comienza tu periodo de dos meses</a></li>
                    <li id="botones"><a href="./login.html">¿Ya eres un kaisen? Identificate</a></li>
                </div>
            </div>` 
    }
}

class Nav{
    constructor(logo, lenguaje){
        this.logo = logo;
        this.lenguaje = lenguaje;
    }
    renderNav(){
        Navegador.innerHTML = `
            <a href="#"><div class="logo">${this.logo}</div></a>

            <ul class="menu">        
                <li><a href="#">ES</a></li><img class="profile" src="${this.lenguaje}" alt="">
            </ul>`
    }
}

class Profile{
    constructor(imgProfile, nameProfile, emailProfile, descProfile){
        this.imgProfile = imgProfile;
        this.nameProfile = nameProfile;
        this.emailProfile = emailProfile;
        this.descProfile = descProfile;
    }
    renderProfile(){
        infopersonal.innerHTML += `
            <div id="profile">
                <img src="${this.imgProfile}">

                <h3>${this.nameProfile}</h3>

                <h6>${this.emailProfile}</h6>

                <p>${this.descProfile}</p>`
    }
}
