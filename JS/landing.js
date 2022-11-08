const Contendorimg = document.getElementById('Contendorimg');
const Navegador = document.getElementById('nav');
const infopersonal = document.getElementById('infopersonal');
const footerImgInfo = document.getElementById('footerImgInfo')

let mapHeader = {
    bienvenida: "Bienvenido a Kaizen",
    descripcion: "Disfruta de miles de peliculas, series y eventosen vivo desde la comodidad de tu casa por tansolo 5000 COP. NO encontraras todo esto a un mejor precio, ¿Qué esperas?",
};

const map = [];
let est = new Contanedor(mapHeader["bienvenida"], mapHeader["descripcion"]);
map.push(est);
map[0].renderContanedor();

let mapNav = {
    logo: "Kaizen",
    lenguaje: "Img/languaje.png",
};

const mapNavegador = [];
let estNav = new Nav(mapNav["logo"], mapNav["lenguaje"]);
mapNavegador.push(estNav);
mapNavegador[0].renderNav();

let profile1 = {imagen: "Img/foto sofi.jpeg", nameProfile: "Sofía Cabrera", emailProfile: "soficabrera@icesi.edu.co", descProfile: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quas, sequi, at atque tenetur tempora facere voluptatum vero aperiam quidem sapiente eaque molestiae nostrum fuga laborum a amet sit id tempore laudantium nihil obcaecati aspernatur iste! Quas iste sint accusamus et id facilis nisi cumque? Amet facere obcaecati omnis nostrum!"};
let profile2 = {imagen: "Img/foto sergio.jpeg", nameProfile: "Sergio Arias", emailProfile: "saas2121@icesi.edu.co", descProfile: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quas, sequi, at atque tenetur tempora facere voluptatum vero aperiam quidem sapiente eaque molestiae nostrum fuga laborum a amet sit id tempore laudantium nihil obcaecati aspernatur iste! Quas iste sint accusamus et id facilis nisi cumque? Amet facere obcaecati omnis nostrum!"};
let profile3 = {imagen: "Img/foto jhojocor.jpeg", nameProfile: "Jhohanson Jovel", emailProfile: "Jhojocor@icesi.edu.co", descProfile: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi quas, sequi, at atque tenetur tempora facere voluptatum vero aperiam quidem sapiente eaque molestiae nostrum fuga laborum a amet sit id tempore laudantium nihil obcaecati aspernatur iste! Quas iste sint accusamus et id facilis nisi cumque? Amet facere obcaecati omnis nostrum!"};
let profiles  = [profile1, profile2, profile3];

const profiles2 = [];

function generateProfile(){
    for(let i=0 ; i<profiles.length ; i++){
        let NuevoProfiles = new Profile(profiles[i].imagen, profiles[i].nameProfile, profiles[i].emailProfile, profiles[i].descProfile);
        profiles2.push(NuevoProfiles);
    }
  }
  
  generateProfile();

  function showDataProfile(){
    for(let i=0 ; i<3 ; i++){
        profiles2[i].renderProfile();
    }
  }
  
  showDataProfile();
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