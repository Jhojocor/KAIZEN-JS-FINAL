const contBanner = document.getElementById('contBanner');
const ContenidoPelis = document.getElementById('ContenidoPelis');
const ContenidoPelis2 = document.getElementById('ContenidoPelis2');

let mapbanner = {
    imagen: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/232GQI4FAVAMZGWWTMUKSODXKA.jpg",
    titulo: "Pinocho",
    rating: "(4.5 Rating)",
    ratingimg: "N/A",
    sinopsis: "Gepetto, el viejo carpintero, deseaba que su última creación, Pinocho, una bonita marioneta de madera, pudiera convertirse en un niño de verdad. El Hada Azul le concedió el deseo, no sin antes advertir a Pinocho que para ser un niño de verdad, debería demostrar que era generoso, obediente y sincero"
};


const map = [];
let est = new pelis(mapbanner["imagen"], mapbanner["titulo"], mapbanner["rating"], mapbanner["ratingimg"], mapbanner["sinopsis"]);
map.push(est);
map[0].rendermap();

let peli0 = {imagen: "https://es.web.img2.acsta.net/pictures/18/10/03/19/36/5818625.jpg", titulo: "Spider-Man", rating: "N/A", ratingimg: "N/A", sinopsis: "Luego de ser mordido por una araña radioactiva, el joven Miles Morales desarrolla misteriosos poderes que lo transforman en el Hombre Araña"};
let peli1 = {imagen: "https://i.blogs.es/3cd5d4/stranger-things-temporada-4-cartel/450_1000.jpg", titulo: "Stranger things", rating: "N/A", ratingimg: "N/A", sinopsis: "Will Byers desaparece misteriosamente, hecho que destapa los extraños sucesos que tienen lugar en la zona"};
let peli2 = {imagen: "https://es.web.img3.acsta.net/pictures/22/02/10/13/16/1386612.jpg", titulo: "Morbius", rating: "N/A", ratingimg: "N/A", sinopsis: "Un doctor que tras sufrir una enfermedad en la sangre, se convirtió en un vampiro"};
let peli3 = {imagen: "https://www.universalpictures-latam.com/tl_files/content/movies/fast9/posters/01.jpg", titulo: "Rápidos y Furiosos 9", rating: "N/A", ratingimg: "N/A", sinopsis: "El equipo se enfrenta a un complot mundial orquestado por el asesino más temible del mundo"};
let peli4 = {imagen: "https://pics.filmaffinity.com/elite-346625901-large.jpg", titulo: "Elite", rating: "N/A", ratingimg: "N/A", sinopsis: "Tres jóvenes de la clase obrera asisten a una de las escuelas más exclusivas de España, donde el choque con los hijos de la élite acaba en una tragedia"};
let peli5 = {imagen: "https://media.revistagq.com/photos/5e941e89d39d4700080d7e2b/master/pass/la-casa-de-papel.jpg", titulo: "la casa de papel", rating: "N/A", ratingimg: "N/A", sinopsis: "Un misterioso hombre conocido como «el Profesor» ha pasado toda su vida planeando el mayor de los atracos de la historia: entrar en la Fábrica Nacional de Moneda y Timbre"};
let peli6 = {imagen: "https://es.web.img2.acsta.net/pictures/18/10/03/19/36/5818625.jpg", titulo: "Spider-Man", rating: "N/A", ratingimg: "N/A", sinopsis: "Luego de ser mordido por una araña radioactiva, el joven Miles Morales desarrolla misteriosos poderes que lo transforman en el Hombre Araña"};
let peli7 = {imagen: "https://es.web.img3.acsta.net/pictures/22/02/10/13/16/1386612.jpg", titulo: "Morbius", rating: "N/A", ratingimg: "N/A", sinopsis: "Un doctor que tras sufrir una enfermedad en la sangre, se convirtió en un vampiro"};
let peli8 = {imagen: "https://www.universalpictures-latam.com/tl_files/content/movies/fast9/posters/01.jpg", titulo: "Rápidos y Furiosos 9", rating: "N/A", ratingimg: "N/A", sinopsis: "El equipo se enfrenta a un complot mundial orquestado por el asesino más temible del mundo"};
let peli9 = {imagen: "https://pics.filmaffinity.com/elite-346625901-large.jpg", titulo: "Elite", rating: "N/A", ratingimg: "N/A", sinopsis: "Tres jóvenes de la clase obrera asisten a una de las escuelas más exclusivas de España, donde el choque con los hijos de la élite acaba en una tragedia"};
let peli10 = {imagen: "https://i.blogs.es/3cd5d4/stranger-things-temporada-4-cartel/450_1000.jpg", titulo: "Stranger things", rating: "N/A", ratingimg: "N/A", sinopsis: "Will Byers desaparece misteriosamente, hecho que destapa los extraños sucesos que tienen lugar en la zona"};
let peli11 = {imagen: "https://es.web.img3.acsta.net/pictures/22/02/10/13/16/1386612.jpg", titulo: "Morbius", rating: "N/A", ratingimg: "N/A", sinopsis: "Un doctor que tras sufrir una enfermedad en la sangre, se convirtió en un vampiro"};
let peli12 = {imagen: "https://www.universalpictures-latam.com/tl_files/content/movies/fast9/posters/01.jpg", titulo: "Rápidos y Furiosos 9", rating: "N/A", ratingimg: "N/A", sinopsis: "El equipo se enfrenta a un complot mundial orquestado por el asesino más temible del mundo"};
let peli13 = {imagen: "https://pics.filmaffinity.com/elite-346625901-large.jpg", titulo: "Elite", rating: "N/A", ratingimg: "N/A", sinopsis: "Tres jóvenes de la clase obrera asisten a una de las escuelas más exclusivas de España, donde el choque con los hijos de la élite acaba en una tragedia"};
let peli14 = {imagen: "https://media.revistagq.com/photos/5e941e89d39d4700080d7e2b/master/pass/la-casa-de-papel.jpg", titulo: "la casa de papel", rating: "N/A", ratingimg: "N/A", sinopsis: "Un misterioso hombre conocido como «el Profesor» ha pasado toda su vida planeando el mayor de los atracos de la historia: entrar en la Fábrica Nacional de Moneda y Timbre"};
let peli15 = {imagen: "https://es.web.img2.acsta.net/pictures/18/10/03/19/36/5818625.jpg", titulo: "Spider-Man", rating: "N/A", ratingimg: "N/A", sinopsis: "Luego de ser mordido por una araña radioactiva, el joven Miles Morales desarrolla misteriosos poderes que lo transforman en el Hombre Araña"};
let peli16 = {imagen: "https://es.web.img3.acsta.net/pictures/22/02/10/13/16/1386612.jpg", titulo: "Morbius", rating: "N/A", ratingimg: "N/A", sinopsis: "Un doctor que tras sufrir una enfermedad en la sangre, se convirtió en un vampiro"};
let peli17 = {imagen: "https://www.universalpictures-latam.com/tl_files/content/movies/fast9/posters/01.jpg", titulo: "Rápidos y Furiosos 9", rating: "N/A", ratingimg: "N/A", sinopsis: "El equipo se enfrenta a un complot mundial orquestado por el asesino más temible del mundo"};
let favs  = [peli0, peli1, peli2, peli3, peli4, peli5, peli6, peli7, peli8, peli9, peli10, peli11, peli12, peli13, peli14, peli15, peli16, peli17];
//console.log(favs[2].imagen);
console.log(favs);
const favoritos = [];

function generate(){
  for(let i=0 ; i<favs.length ; i++){
      let Nuevofavs = new pelis(favs[i].imagen, favs[i].titulo, favs[i].rating, favs[i].ratingimg, favs[i].sinopsis);
      favoritos.push(Nuevofavs);
      //console.log(Nuevofavs);
  }
}

generate();


function showData(){
  for(let i=0 ; i<18 ; i++){
    favoritos[i].rendermodulo();
  }
}

showData();


let pelisA0 = {imagen: "https://pics.filmaffinity.com/cobra_kai-773106365-large.jpg", titulo: "Cobra Kai", rating: "N/A", ratingimg: "N/A", sinopsis: "Cobra Kai es la secuela de la famosa saga cinematográfica Karate Kid. La serie sigue la historia 30 años después del campeonato"};
let pelisA1 = {imagen: "https://es.web.img3.acsta.net/pictures/18/10/31/17/34/2348073.jpg", titulo: "Rick and Morty", rating: "N/A", ratingimg: "N/A", sinopsis: "Rick Es un genio, pero es irresponsable, alcohólico, egoísta, un poco depresivo CON  Morty viven una variedad de aventuras a lo largo del cosmos y universos paralelos"};
let pelisA2 = {imagen: "https://pics.filmaffinity.com/The_Umbrella_Academy_Serie_de_TV-735740351-large.jpg", titulo: "the umbrella academy", rating: "N/A", ratingimg: "N/A", sinopsis: "La muerte de su padre reúne a unos hermanos distanciados y con extraordinarios poderes que descubren impactantes secretos"};
let pelisA3 = {imagen: "https://i.blogs.es/3cd5d4/stranger-things-temporada-4-cartel/450_1000.jpg", titulo: "the wheel of time", rating: "N/A", ratingimg: "N/A", sinopsis: "Una poderosa fortaleza de mujeres, parecen dominar la magia por su capacidad de contactar con el Poder Único"};
let pelisA4 = {imagen: "https://pics.filmaffinity.com/hawkeye-585920449-large.jpg", titulo: "hawkeye", rating: "N/A", ratingimg: "N/A", sinopsis: "la historia del superhéroe Clint Barton que se encuentra en Nueva York  tras los acontecimientos de Vengadores"};
let pelisA5 = {imagen: "https://pics.filmaffinity.com/Hanna_Serie_de_TV-443575660-mmed.jpg", titulo: "HANNA", rating: "N/A", ratingimg: "N/A", sinopsis: "Una joven de 16 años, que fue criada por su padre para ser la perfecta asesina, es enviada en una misión alrededor de Europa"};
let pelisA6 = {imagen: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/obi-wan-kenobi-serie-disney-poster-1651689693.jpg", titulo: "Obi wan kenobi", rating: "N/A", ratingimg: "N/A", sinopsis: "Kenobi es clave en la que casi es la extinción de los Jedi, las Guerras Clon, la caída de la República Galáctica y la lucha contra el posterior Imperio Galáctico"};
let pelisA7 = {imagen: "https://es.web.img3.acsta.net/pictures/21/10/08/08/37/5841729.jpg", titulo: "La rueda del tiempo", rating: "N/A", ratingimg: "N/A", sinopsis: "transcurre en un futuro postapocalíptico llamado 'La Tercera Edad'. Es una época en la que el mundo está custodiado por las mujeres llamdas Aes Sedai"};
let pelisA8 = {imagen: "https://pics.filmaffinity.com/The_Witcher_Serie_de_TV-330642357-large.jpg", titulo: "The Witcher", rating: "N/A", ratingimg: "N/A", sinopsis: "un cazador de monstruos, trata de encontrar su lugar en un mundo en el que las personas suelen ser más malvadas que las bestias"};
let pelisA9 = {imagen: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/09/titanes-poster-temporada-2.jpg?itok=PJZ02S2i", titulo: "Titanes", rating: "N/A", ratingimg: "N/A", sinopsis: "Los jóvenes héroes del Universo DC alcanzan la mayoría de edad en esta versión de la franquicia Teen Titans"};
let pelisA10 = {imagen: "https://pics.filmaffinity.com/jigeum_uri_hakgyoneun-306216055-large.jpg", titulo: "Estamos muertos", rating: "N/A", ratingimg: "N/A", sinopsis: "Una epidemia mortal estalla en una escuela. Acorralados, los alumnos solo tienen una opción: luchar con todas sus fuerzas"};
let pelisA11 = {imagen: "https://es.web.img3.acsta.net/pictures/20/06/17/16/22/3443676.jpg", titulo: "Warrior Nun", rating: "N/A", ratingimg: "N/A", sinopsis: "Una adolescente huérfana despierta en una morgue y descubre que una secta secreta de monjas cazademonios"};
let pelisA12 = {imagen: "https://pics.filmaffinity.com/cobra_kai-773106365-large.jpg", titulo: "Cobra Kai", rating: "N/A", ratingimg: "N/A", sinopsis: "Cobra Kai es la secuela de la famosa saga cinematográfica Karate Kid. La serie sigue la historia 30 años después del campeonato"};
let pelisA13 = {imagen: "https://es.web.img3.acsta.net/pictures/18/10/31/17/34/2348073.jpg", titulo: "Rick and Morty", rating: "N/A", ratingimg: "N/A", sinopsis: "Rick Es un genio, pero es irresponsable, alcohólico, egoísta, un poco depresivo CON  Morty viven una variedad de aventuras a lo largo del cosmos y universos paralelos"};
let pelisA14 = {imagen: "https://pics.filmaffinity.com/The_Umbrella_Academy_Serie_de_TV-735740351-large.jpg", titulo: "the umbrella academy", rating: "N/A", ratingimg: "N/A", sinopsis: "La muerte de su padre reúne a unos hermanos distanciados y con extraordinarios poderes que descubren impactantes secretos"};
let pelisA15 = {imagen: "https://pics.filmaffinity.com/Hanna_Serie_de_TV-443575660-mmed.jpg", titulo: "HANNA", rating: "N/A", ratingimg: "N/A", sinopsis: "Una joven de 16 años, que fue criada por su padre para ser la perfecta asesina, es enviada en una misión alrededor de Europa"};
let pelisA16 = {imagen: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/obi-wan-kenobi-serie-disney-poster-1651689693.jpg", titulo: "Obi wan kenobi", rating: "N/A", ratingimg: "N/A", sinopsis: "Kenobi es clave en la que casi es la extinción de los Jedi, las Guerras Clon, la caída de la República Galáctica y la lucha contra el posterior Imperio Galáctico"};
let pelisA17 = {imagen: "https://es.web.img3.acsta.net/pictures/21/10/08/08/37/5841729.jpg", titulo: "La rueda del tiempo", rating: "N/A", ratingimg: "N/A", sinopsis: "transcurre en un futuro postapocalíptico llamado 'La Tercera Edad'. Es una época en la que el mundo está custodiado por las mujeres llamdas Aes Sedai"};
let A = [pelisA0, pelisA1, pelisA2, pelisA3, pelisA4, pelisA5, pelisA6, pelisA7, pelisA8, pelisA9, pelisA10, pelisA11, pelisA12, pelisA13, pelisA14, pelisA15, pelisA16, pelisA17];
console.log(A);

const Accion = [];

function generateA(){
    for(let i=0 ; i<A.length ; i++){
        let NuevoA = new pelis(A[i].imagen, A[i].titulo, A[i].rating, A[i].ratingimg, A[i].sinopsis);
        Accion.push(NuevoA);
        //console.log(NuevoA);
    }
  }
  
  generateA();
  
  
  function showDatA(){
    for(let i=0 ; i<A.length ; i++){
        Accion[i].rendermodulo2();
    }
  }
  
  showDatA();
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


