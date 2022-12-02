const contBanner = document.getElementById('contBanner');
const ContenidoPelis = document.getElementById('ContenidoPelis');
const ContenidoPelis2 = document.getElementById('ContenidoPelis2');


const BASEURL = "https://rickandmortyapi.com/api/character"
const info = document.getElementById('ContenidoPelis2')
const searchInput = document.getElementById('searchInput')
const searchBtn = document.getElementById('searchBtn')

/*let posts = [];
function crearlist(){
  let savedPost = localStorage.getItem('favoritos');
  ContenidoPelis.innerHTML = "favoritos"
  ContenidoPelis2.innerHTML = "peliculas"
  if(savedPost != null){
  posts = JSON.parse(savedPost);
  console.log(posts);
  for(let i=0 ; i<posts.length ; i++){
      let post = new pelis(posts[i].id, posts[i].image, posts[i].name, posts[i].status, posts[i].type, posts[i].species, posts[i].estado);
      if(post.estado === 0){
          post.rendermodulo(ContenidoPelis2);
      }else{
          post.rendermodulo2(ContenidoPelis);
      }

  }
  addevents(posts);
}
}
crearlist()*/

const downloadData = async (url)=>{
  info.innerHTML += ``;
  let response = await fetch(url)
  let data = await response.json();

  data.results.forEach(character => {
      console.log(character);
      let id = character.id
      let image = character.image
      let name = character.name
      let status = character.status
      let type = character.type
      let species = character.species
      let card = new pelis(id, image, name, status, type, species, 0);
      //posts.push(card);
      //let json = JSON.stringify(posts);
      //localStorage.setItem('favoritos', json);
    //crearlist();
      console.log(card);
      card.rendermap(info);
      card.rendermodulo(info);

    /*const createCard = (card) =>{
      var isfav= isfavorite(card.name);
      if (isfav){
        card.rendermodulo3(info);
      }
      else{
        card.rendermodulo2(info);
      }
    }
    createCard(card)*/
    
})

  };
downloadData(BASEURL)

/*function addevents(posts){
  for(let i=0 ; i<posts.length ; i++){
      let post = new pelis(posts[i].id, posts[i].image, posts[i].name, posts[i].status, posts[i].type, posts[i].species, posts[i].estado);
      let avanzar = document.getElementById(`botonFav${post.id}`);
      avanzar.addEventListener("click", function(){
          if(posts[i].estado<2){
              posts[i].estado += 1
              let json = JSON.stringify(posts);
              savedPost = json;
              localStorage.setItem('favoritos', json);
              //Volver a recargar los post
              crearlist();
          }
      });
      let retroceder = document.getElementById(`Back${post.id}`);
      retroceder.addEventListener("click", function(){
          //alert(post.message+"\n"+post.id);
          if(posts[i].estado>0){
              posts[i].estado -= 1
              let json = JSON.stringify(posts);
              savedPost = json;
              localStorage.setItem('favoritos', json);
              //Volver a recargar los post
              crearlist()
          }
          //Volver a recargar los post
          crearlist()
      });
  }
}*/





const search = ()=>{
  let input = searchInput.value
  let url = `${BASEURL}${input}`;
  console.log(url);
  downloadData(url);
}

searchBtn.addEventListener('click', search);




//--------------------------------------------------------------------------------------------------------------//

/*const localStorage = window.localStorage;

function favoritos(idMovie){
  var vFav = null;
if(localStorage.getItem("favorite"))
vFav = localStorage.getItem("favorite")
else vFav="";

vFav += idMovie + ',';
localStorage.setItem("favorite",vFav);

downloadData() ;
}

function isfavorite(id) {
  var isfav= false;
  var vFav = localStorage.getItem("favorite");
  if(vFav){
      var arrayfav = vFav.split(",")
      arrayfav.forEach(num => {
          var characterIndex= parseInt(num);
          if (!isNaN(characterIndex)){
             if (characterIndex == id){
                  isfav= true;
             }

          }
          
      })
  }
  return isfav;

}

function removefavorite(id) {
  var vFav = localStorage.getItem("favorite");
  var newFavs= "";

  if(vFav){
      var arrayfav = vFav.split(",")
      arrayfav.forEach(num => {
          var characterIndex= parseInt(num);
          if (!isNaN(characterIndex)){
             if (characterIndex != id){
                  newFavs += characterIndex + ',';
             }

          }

      })

      localStorage.setItem('favorite', newFavs);
      allArtistsCards();
  }

}*/

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