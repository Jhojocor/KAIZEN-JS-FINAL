const bannerserie = document.getElementById('bannerserie');
const ContenidoPelis = document.getElementById('ContenidoPelis');

let mapbanner = {
    imagen: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mv5bmzmyyji4ntmtmgiyms00nmywltlmmjitzjrmzwrlmgvjmzjixkeyxkfqcgdeqxvymteymjm2ndc2-v1-1657880384.jpg",
    titulo: "Spider-Man: un nuevo universo",
    rating: "(5 Rating)",
    ratingimg: "N/A",
    sinopsis: "Luego de ser mordido por una araña radioactiva, el joven Miles Morales desarrolla misteriosos poderes que lo transforman en el Hombre Araña. Ahora deberá usar sus nuevas habilidades ante el malvado Kingpin, un enorme demente que puede abrir portales hacia otros universos"
};


const map = [];
let est = new pelis(mapbanner["imagen"], mapbanner["titulo"], mapbanner["rating"], mapbanner["ratingimg"], mapbanner["sinopsis"]);
map.push(est);
map[0].rendermapserie();
console.log(map);

let peli0 = {imagen: "Img/Primer.jpg", titulo: "La Supervivencia del Más Fuerte", rating: "N/A", ratingimg: "N/A", sinopsis: "El verano está llegando a su fin y el primer año de secundaria de Peter Parker está a punto de comenzar. Su ego de superhéroe, Spider-Man tiene que enfrentarse al Buitre"};
let peli1 = {imagen: "Img/segundo.jpg", titulo: "Conexiones", rating: "N/A", ratingimg: "N/A", sinopsis: "Peter Parker intenta guiar a Liz Allan mientras Spider-Man intenta detener a Electro, quien nunca se detendrá para encontrar una cura para el accidente que lo hizo tal como es"};
let peli2 = {imagen: "Img/tercero.jpg", titulo: "La Mano Invisible", rating: "N/A", ratingimg: "N/A", sinopsis: "Peter se esfuerza por conseguir una fecha para el otoño formal, y para encontrar una manera de pagar por ello. Mientras tanto, el imparable Rhino, la última de las creaciones del Big Man, ha jurado vengarse de Spider-Man. Spider-Man lleva la batalla directamente al origen de sus problemas, la mano previamente invisible, que secretamente ha estado conduciendo sus ataques de villano de la semana. Pero Big Man ofrece una solución sorprendente a los problemas del Hombre Araña, una oferta tentadora que no cree que nuestro héroe pueda permitirse rechazar. ¿Hará Spider-Man lo correcto?"};
let peli3 = {imagen: "Img/Primer.jpg", titulo: "La Supervivencia del Más Fuerte", rating: "N/A", ratingimg: "N/A", sinopsis: "El verano está llegando a su fin y el primer año de secundaria de Peter Parker está a punto de comenzar. Su ego de superhéroe, Spider-Man tiene que enfrentarse al Buitre"};
let peli4 = {imagen: "Img/segundo.jpg", titulo: "Conexiones", rating: "N/A", ratingimg: "N/A", sinopsis: "Peter Parker intenta guiar a Liz Allan mientras Spider-Man intenta detener a Electro, quien nunca se detendrá para encontrar una cura para el accidente que lo hizo tal como es"};
let peli5 = {imagen: "Img/tercero.jpg", titulo: "La Mano Invisible", rating: "N/A", ratingimg: "N/A", sinopsis: "Peter se esfuerza por conseguir una fecha para el otoño formal, y para encontrar una manera de pagar por ello. Mientras tanto, el imparable Rhino, la última de las creaciones del Big Man, ha jurado vengarse de Spider-Man. Spider-Man lleva la batalla directamente al origen de sus problemas, la mano previamente invisible, que secretamente ha estado conduciendo sus ataques de villano de la semana. Pero Big Man ofrece una solución sorprendente a los problemas del Hombre Araña, una oferta tentadora que no cree que nuestro héroe pueda permitirse rechazar. ¿Hará Spider-Man lo correcto?"};
let peli6 = {imagen: "Img/tercero.jpg", titulo: "La Mano Invisible", rating: "N/A", ratingimg: "N/A", sinopsis: "Peter se esfuerza por conseguir una fecha para el otoño formal, y para encontrar una manera de pagar por ello. Mientras tanto, el imparable Rhino, la última de las creaciones del Big Man, ha jurado vengarse de Spider-Man. Spider-Man lleva la batalla directamente al origen de sus problemas, la mano previamente invisible, que secretamente ha estado conduciendo sus ataques de villano de la semana. Pero Big Man ofrece una solución sorprendente a los problemas del Hombre Araña, una oferta tentadora que no cree que nuestro héroe pueda permitirse rechazar. ¿Hará Spider-Man lo correcto?"};
let peli7 = {imagen: "Img/Primer.jpg", titulo: "La Supervivencia del Más Fuerte", rating: "N/A", ratingimg: "N/A", sinopsis: "El verano está llegando a su fin y el primer año de secundaria de Peter Parker está a punto de comenzar. Su ego de superhéroe, Spider-Man tiene que enfrentarse al Buitre"};
let peli8 = {imagen: "Img/tercero.jpg", titulo: "La Mano Invisible", rating: "N/A", ratingimg: "N/A", sinopsis: "Peter se esfuerza por conseguir una fecha para el otoño formal, y para encontrar una manera de pagar por ello. Mientras tanto, el imparable Rhino, la última de las creaciones del Big Man, ha jurado vengarse de Spider-Man. Spider-Man lleva la batalla directamente al origen de sus problemas, la mano previamente invisible, que secretamente ha estado conduciendo sus ataques de villano de la semana. Pero Big Man ofrece una solución sorprendente a los problemas del Hombre Araña, una oferta tentadora que no cree que nuestro héroe pueda permitirse rechazar. ¿Hará Spider-Man lo correcto?"};
let peli9 = {imagen: "Img/tercero.jpg", titulo: "La Mano Invisible", rating: "N/A", ratingimg: "N/A", sinopsis: "Peter se esfuerza por conseguir una fecha para el otoño formal, y para encontrar una manera de pagar por ello. Mientras tanto, el imparable Rhino, la última de las creaciones del Big Man, ha jurado vengarse de Spider-Man. Spider-Man lleva la batalla directamente al origen de sus problemas, la mano previamente invisible, que secretamente ha estado conduciendo sus ataques de villano de la semana. Pero Big Man ofrece una solución sorprendente a los problemas del Hombre Araña, una oferta tentadora que no cree que nuestro héroe pueda permitirse rechazar. ¿Hará Spider-Man lo correcto?"};
let peli10 = {imagen: "Img/Primer.jpg", titulo: "La Supervivencia del Más Fuerte", rating: "N/A", ratingimg: "N/A", sinopsis: "El verano está llegando a su fin y el primer año de secundaria de Peter Parker está a punto de comenzar. Su ego de superhéroe, Spider-Man tiene que enfrentarse al Buitre"};
let peli11 = {imagen: "Img/Primer.jpg", titulo: "La Supervivencia del Más Fuerte", rating: "N/A", ratingimg: "N/A", sinopsis: "El verano está llegando a su fin y el primer año de secundaria de Peter Parker está a punto de comenzar. Su ego de superhéroe, Spider-Man tiene que enfrentarse al Buitre"};
let peli12 = {imagen: "Img/segundo.jpg", titulo: "Conexiones", rating: "N/A", ratingimg: "N/A", sinopsis: "Peter Parker intenta guiar a Liz Allan mientras Spider-Man intenta detener a Electro, quien nunca se detendrá para encontrar una cura para el accidente que lo hizo tal como es"};
let peli13 = {imagen: "Img/tercero.jpg", titulo: "La Mano Invisible", rating: "N/A", ratingimg: "N/A", sinopsis: "Peter se esfuerza por conseguir una fecha para el otoño formal, y para encontrar una manera de pagar por ello. Mientras tanto, el imparable Rhino, la última de las creaciones del Big Man, ha jurado vengarse de Spider-Man. Spider-Man lleva la batalla directamente al origen de sus problemas, la mano previamente invisible, que secretamente ha estado conduciendo sus ataques de villano de la semana. Pero Big Man ofrece una solución sorprendente a los problemas del Hombre Araña, una oferta tentadora que no cree que nuestro héroe pueda permitirse rechazar. ¿Hará Spider-Man lo correcto?"};
let peli14 = {imagen: "Img/Primer.jpg", titulo: "La Supervivencia del Más Fuerte", rating: "N/A", ratingimg: "N/A", sinopsis: "El verano está llegando a su fin y el primer año de secundaria de Peter Parker está a punto de comenzar. Su ego de superhéroe, Spider-Man tiene que enfrentarse al Buitre"};
let caps  = [peli0, peli1, peli2, peli3, peli4, peli5, peli6, peli7, peli8, peli9, peli10, peli11, peli12, peli13, peli14];
console.log(caps);
const capitulos = [];

function generate(){
  for(let i=0 ; i<caps.length ; i++){
      let Nuevocap = new pelis(caps[i].imagen, caps[i].titulo, caps[i].rating, caps[i].ratingimg, caps[i].sinopsis);
      capitulos.push(Nuevocap);
      //console.log(Nuevofavs);
  }
}

generate();


function showData(){
  for(let i=0 ; i<caps.length ; i++){
    capitulos[i].rendercaps();
  }
}

showData();
