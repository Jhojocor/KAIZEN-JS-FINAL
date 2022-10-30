class pelis{
    constructor(imagen, titulo, rating, ratingimg, sinopsis){
        this.imagen = imagen;
        this.titulo = titulo;
        this.rating = rating;
        this.ratingimg = ratingimg;
        this.sinopsis = sinopsis;
    }
    rendermap(){
        contBanner.innerHTML += `<div class="variableImagen"><img src="${this.imagen}"></div>
    <div id="Contendorimg">
    <div id="letras">
        <div class="arreglo">
            <h2>${this.titulo}</h2>
            <h5>${this.rating}</h5>
        </div>
        <div class="final">
            <input id="crear" type="submit" value="PLAY">
            <input id="crear" type="submit" value="SAVE">
        </div>
    </div>
    </div>`
    }
    rendermodulo(){
        ContenidoPelis.innerHTML += `<div class="primera" >
        <a href="serie.html">
        <img class="imgpri" src="${this.imagen}" alt="" width="250px">
        </a>    
        <div class="contontext">
        <h4>${this.titulo}</h4> 
        <p>${this.sinopsis}</p>
        </div>
    </div>`
    }
    rendermodulo2(){
        ContenidoPelis2.innerHTML += `<div class="primera" >
        <a href="serie.html">
        <img class="imgpri" src="${this.imagen}" alt="" width="250px">
        </a>    
        <div class="contontext">
        <h4>${this.titulo}</h4> 
        <p>${this.sinopsis}</p>
        </div>
    </div>`
    }
    rendermapserie(){
        bannerserie.innerHTML += `<div class="variableImagen"><img src="${this.imagen}"></div>
        <div id="Contendorimg">
            <div id="letras">
                <div class="arreglo">
                    <h2>${this.titulo}</h2>
                    <h5>${this.rating}</h5>
                </div>
                <p>${this.sinopsis}</p>
                <div class="final">
                    <input id="crear" type="submit" value="PLAY">
                    <input id="crear" type="submit" value="SAVE">
                </div>
            </div>
        </div>`
    }
    rendercaps(){
        ContenidoPelis.innerHTML += `<div class="serieC">
        <img class="serieimg" src="${this.imagen}" alt="">
        <div class="SerieCS">
        <a href="#"><img class="play" src="Img/plays.png" alt=""></a>
        <h4 class="Eltitulo">${this.titulo}</h4>
        </div>
        <div class="arreglo2">
        <p class="sinopsis">${this.sinopsis}</p>
        </div>
    </div>`
    }
}