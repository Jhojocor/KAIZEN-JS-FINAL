const infousuario = document.getElementById("infousuario");

let iusuario = ["Nombre usuario: saas2121  ",  
               "Corrreo electronico:  Sergio.arias8@gmail.com ",
               "Fecha de nacimiento:  2 de julio de 1998",
               "País o región: Colombia"]




console.log(iusuario);



function showData(){
    infousuario.innerHTML += "<ol>";
    for(let i=0 ; i<iusuario.length ; i++ ){
        infousuario.innerHTML += `<li>${iusuario[i]}<li>`
      
    }
    infousuario.innerHTML += "<ol>";
}

showData();

const footer = document.getElementById("footer");

let Contact = ["Sede central: icesi",   "telefono: +57 30078125", "Correo: Kaisen@gmail.com"]


//arreglo.push("Sede central: icesi");
//arreglo.push("telefono: +57 30078125");
//arreglo.push("Correo: Kaisen@gmail.com");

console.log(Contact);



function showDataContact(){
    for(let i=0 ; i<Contact.length ; i++ ){
        footer.innerHTML += `&nbsp${Contact[i]}&nbsp`
    }
}

showDataContact();