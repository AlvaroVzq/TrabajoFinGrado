/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable prefer-const */

/*
Definimos un boolean y comprobamos si esta activo para poder cambiar el 
color y el fondo de la tipografia usada para los botones y los subtitutlos.

*/
let booleanColor = false;
function cambiaColor(){
let botones = document.getElementsByClassName('meeting-control-button');

    if(!booleanColor){
        for(let i = 0; i < botones.length; i++){
            if(i !== 6){
                botones[i].style.backgroundColor = "blue";
            }
            document.getElementsByClassName('words')[0].style.backgroundColor = "#406983";
            document.getElementsByClassName('words')[0].style.color = "white";
        }
        booleanColor = true;
    }else{
        for(let i = 0; i < botones.length; i++){
            botones[i].style.backgroundColor = "black";
            if(i === 6){
                botones[i].style.backgroundColor = "red";
            }
            document.getElementsByClassName('words')[0].style.backgroundColor = "white";
            document.getElementsByClassName('words')[0].style.color = "black";

        }
        booleanColor = false;
    }
}

let booleansubtitulo = false;

function subtitulos(){

    if(!booleansubtitulo){
        document.getElementsByClassName('words')[0].style.display='block';
        booleansubtitulo = true;
    }
    
    else{
        document.getElementsByClassName('words')[0].style.display='none';
        booleansubtitulo = false;
    }
}


let booleanTamanho = false;


// Aumenta ancho y alto de los botones, tamaño de la fuente y el tamaño de los iconos.
function cambiaTamanho(){
    if(!booleanTamanho) {
        document.getElementsByClassName('meeting-control-layer')[1].style.setProperty("top", "-100px");
        document.getElementsByClassName('meeting-control-layer')[1].style.setProperty("height", "100px");
        let botones = document.getElementsByClassName('meeting-control-button');
        for(let i = 0; i < botones.length; i++){
            botones[i].style.setProperty("height", "4em");
            botones[i].style.setProperty("width", "4em");
            }
        let iconos = document.getElementsByClassName('fas');
        for(let i = 0; i < iconos.length; i++){
            iconos[i].style.setProperty("font-size", "37px");
        }
        let nombre = document.getElementsByTagName('h6');
        for(let i = 0; i < nombre.length; i++){
            nombre[i].style.setProperty("top", "28%");
            nombre[i].style.setProperty("font-size", "0.85em");
        }
        let ayuda = document.getElementsByTagName('q');
        for(let i = 0; i < ayuda.length; i++){
            ayuda[i].style.setProperty("font-size", "22px");
        }
        document.getElementsByClassName('words')[0].style.setProperty("font-size", "18px");
        booleanTamanho = true;
    }else{
        document.getElementsByClassName('meeting-control-layer')[1].style.setProperty("top", "-100px");
        document.getElementsByClassName('meeting-control-layer')[1].style.setProperty("height", "100px");
        let botones = document.getElementsByClassName('meeting-control-button');
        for(let i = 0; i < botones.length; i++){
            botones[i].style.setProperty("height", "2em");
            botones[i].style.setProperty("width", "2em");
        }
        let iconos = document.getElementsByClassName('fas');
        for(let i = 0; i < iconos.length; i++){
            iconos[i].style.setProperty("font-size", "24px");
        }

        let nombre = document.getElementsByTagName('h6')
        for(let i = 0; i < nombre.length; i++){
            nombre[i].style.setProperty("top", "32px");
            nombre[i].style.setProperty("font-size", "16px");
        }
        let ayuda = document.getElementsByTagName('q');
        for(let i = 0; i < ayuda.length; i++){
            ayuda[i].style.setProperty("font-size", "16px");
        }
        document.getElementsByClassName('words')[0].style.setProperty("font-size", "14px");

        booleanTamanho = false;
    }
    
}

let botonAyudaDado = false;

// Funcion que sirve para desplegar un menu deslizable de ayuda
function desplegaAyuda() {

    if(!botonAyudaDado) {
        document.getElementsByClassName('slideshow-container')[0].style.display = "block";
        botonAyudaDado = true;
    }else{
        document.getElementsByClassName('slideshow-container')[0].style.display = "none";
        botonAyudaDado = false;
    }
   
}
Mousetrap.bind('c', () => {
   cambiaColor();
});


Mousetrap.bind('r', () => {
    cambiaTamanho();
});

Mousetrap.bind('h', () => {
    desplegaAyuda();
});

Mousetrap.bind('s', () => {
    subtitulos();
});

Mousetrap.bind('f', () => {
    downloadToFile();
});

Mousetrap.bind('right', () => {
    plusSlides(1);
});

Mousetrap.bind('left', () => {
    plusSlides(-1);
});


// Codigo para poder calcular en que diapositiva de ayuda me encuentro y si 
//le doy al boton de la derecha poder mostrar la siguiente
// y si le doy a la de la izquierda poder regresar a la anterior.

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

