class pelis{
    constructor(id, image, name, status, species, sinopsis, estado){
        this.id = id;
        this.image = image;
        this.name = name;
        this.status = status;
        this.species = species;
        this.sinopsis = sinopsis;
        this.estado = estado;
    }
    rendermap(){
        contBanner.innerHTML = `<div class="variableImagen"><img src="${this.image}"></div>
    <div id="Contendorimg">
    <div id="letras">
        <div class="arreglo">
            <h2>${this.name}</h2>
        </div>
        <div class="final">
            <input id="crear" type="submit" value="PLAY">
            <input id="crear" type="submit" value="SAVE">
        </div>
    </div>
    </div>`
    }
    rendermodulo(container){
        let div = document.createElement('div'); 
        let content = `<div class="primera" >
        <a href="serie.html">
        <img class="imgpri" src="${this.image}" alt="" width="250px">
        </a>    
        <div class="contontext">
        <h4>${this.name}</h4> 
        <p>${this.status}</p>
        <button id="botonFav${this.id}">Agregar a favoritos</button>
        </div>
    </div>`
    div.innerHTML = content;
    container.appendChild(div);
    }
    rendermodulo2(container){
        let div = document.createElement('div'); 
        let content = `<div class="primera" >
        <a href="serie.html">
        <img class="imgpri" src="${this.image}" alt="" width="250px">
        </a>    
        <div class="contontext">
        <h4>${this.name}</h4> 
        <p>${this.status}</p>
        <button id="Back${post.id}" onclick="favoritos()">Eliminar favoritos</button>
        </div>
    </div>`
    div.innerHTML = content;
    container.appendChild(div);
    }
    rendermodulo3(container){
        let div = document.createElement('div'); 
        let content = `<div class="primera" >
        <a href="serie.html">
        <img class="imgpri" src="${this.image}" alt="" width="250px">
        </a>    
        <div class="contontext">
        <h4>${this.name}</h4> 
        <p>${this.status}</p>
        <button id="botonFav" onclick="removefavorite()">Quitar de favoritos</button>
        </div>
    </div>`
    div.innerHTML = content;
    container.appendChild(div);
    }
}