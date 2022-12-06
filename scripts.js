// 1. Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.
//Declaramos una variable que seleccióon el elemento html

var root = document.documentElement;

// Asignamos una función para que se ejecute con el evento "click" que evita que se ejecute la acción por efecto del clic en el elemento

root.onclick = function(event) {
  event.preventDefault();
}


// 2. Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:

// 2.1 Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*.

const imágenes = document.querySelectorAll("img");
const gifs = ["../assets/magic-1.gif", "../assets/magic-2.gif", "../assets/magic-3.gif", "../assets/magic-4.gif", "../assets/magic-5.gif", "../assets/magic-6.gif"]


imágenes.forEach(function(imagen) {
    imagen.onclick = function(event){
        let randomGif = gifs[Math.floor(Math.random() * gifs.length)];
        imagen.setAttribute("src", randomGif);
    };
    imagen.onmouseover = function(event) {
        var temp = imagen.getAttribute(src);
        imagen.setAttribute("src", "../assets/abracadabra.gif");
    };
    imagen.onmouseout = function(event) {
        imagen.setAttribute("src", temp);
    }
})

// 2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

const párrafos = document.querySelectorAll("p");
párrafos.forEach(function(párrafo) {
    párrafo.onclick = function(event){
        párrafo.style.color = "yellow";
        párrafo.style.backgroundColor =  "blue";
    }
        
})

// 2.3 Bloques de article o section: Cambia el color de fondo.

const secciones = document.querySelectorAll("section");
secciones.forEach(function(sección) {
    sección.onclick = function(event){
        sección.style.backgroundColor =  "green";
    }
})


// 3. Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes, y devolver dicho elemento a su estado original cuando salga el cursor.



imágenes 

im.onmouseover = function() {
    parrafo1.style.visibility = "visible";
};
párrafo2.onmouseout = function() {
    parrafo1.style.visibility = "hidden";
};


// 3.1 Imágenes: Cambia la imagen por el gif abracadabra.gif.

// 3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

// 3.3 Bloques de article o section: Color de fondo distinto al de párrafo.

