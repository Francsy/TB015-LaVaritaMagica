// 1. Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.
//Declaramos una variable que seleccióon el elemento html

let root = document.documentElement;

// Asignamos una función para que se ejecute con el evento "click" que evita que se ejecute la acción por efecto del clic en el elemento

root.addEventListener("click", function(event) {
    event.preventDefault()
} )

/* OTRA OPCIÓN:

root.onclick = function(event) {
  event.preventDefault();
  
} */

// 2. Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:

// 2.1 Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*.

const imágenes = document.querySelectorAll("img");
const gifs = ["/assets/magic-1.gif", "/assets/magic-2.gif", "/assets/magic-3.gif", "/assets/magic-4.gif", "/assets/magic-5.gif", "/assets/magic-6.gif"]

for (let i = 0; i < imágenes.length; i++) {
    const imagen = imágenes[i];
    imagen.onclick = function() {
        //let randomGif = gifs[Math.floor(Math.random()*gifs.length)]
        imagen.setAttribute("src", getRandom(gifs))
    }
}

/* 
EXTRA: Opción similar pero usando .forEach

imágenes.forEach(function(imagen) {
    imagen.onclick = function(event){
        let randomGif = gifs[Math.floor(Math.random() * gifs.length)];
        imagen.setAttribute("src", randomGif);
    }
})
*/


// 2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
//Paleta de colores de coolors.co (ejercicio 5 y 6): 

const colors = ["#1B998B", "EBF5DF", "#8377D1", "#EF767A", "#E8871E"]

const parrafos = document.querySelectorAll("p");

for (let i = 0; i < parrafos.length; i++) {
    const parrafo = parrafos[i];
    parrafo.onclick = function(){
        parrafo.style.backgroundColor = getRandom(colors) 
        parrafo.style.color = getRandom(colors)
    }
}


/* 
EXTRA: Usando .forEach

parrafos.forEach(function(párrafo) {
    párrafo.onclick = function(event){
        párrafo.style.color = "yellow";
        párrafo.style.backgroundColor =  "blue";
    }     
})
 */


// 2.3 Bloques de article o section: Cambia el color de fondo.

const bloques = document.querySelectorAll("section")

for (let i = 0; i < bloques.length; i++) {
    const bloque = bloques[i];
    bloque.onclick = function () {
        bloque.style.backgroundColor = getRandom(colors)
    }
    
}

/*
EXTRA: Usando .forEach

bloques.forEach(function(sección) {
    sección.onclick = function(event){
        sección.style.backgroundColor =  "green";
    }
})
*/

// 3. Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes, y devolver dicho elemento a su estado original cuando salga el cursor.

// 3.1 Imágenes: Cambia la imagen por el gif abracadabra.gif.


for (let i = 0; i < imágenes.length; i++) {
    const imagen = imágenes[i];
    let temp = imagen.src;
    imagen.onmouseover = function () {
        imagen.setAttribute("src", "/assets/abracadabra.gif")
    }
    imagen.onmouseout = function () {
        imagen.setAttribute("src", temp)
    }
}



/* OPCIÓN .forEach (aun por probar)
imágenes.forEach(function(imagen) {

    let temp = imagen.src;

    imagen.onmouseover = function(event) {
        imagen.setAttribute("src", "/assets/abracadabra.gif");
    };
    imagen.onmouseout = function(event) {
        imagen.setAttribute("src", temp);
    }
}) 
*/


// 3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

for (let i = 0; i < parrafos.length; i++) {
    const parrafo = parrafos[i];
    let tempParrFondo = parrafo.style.backgroundColor;
    let tempParrColor = parrafo.style.color;
    parrafo.onmouseover = function(){
        parrafo.style.backgroundColor = getRandom(colors) 
        parrafo.style.color = getRandom(colors)
    }
    parrafo.onmouseout = function() {
        parrafo.style.backgroundColor = tempParrFondo 
        parrafo.style.color = tempParrColor
    }
}

// 3.3 Bloques de article o section: Color de fondo distinto al de párrafo.

for (let i = 0; i < bloques.length; i++) {
    const bloque = bloques[i];
    let tempBloqueFondo = bloque.style.backgroundColor;
    bloque.onmouseover = function () {
        bloque.style.backgroundColor = getRandom(colors)
    }
    bloque.onmouseout = function () {
        bloque.style.backgroundColor = tempBloqueFondo
    }
    
}

// Premium
// 4. Crea una función de nombre getRandom que acepte un array con valores y devuelva uno de ellos de manera aleatoria.

function getRandom (arr) {
    return arr[Math.floor(Math.random()*arr.length)]
}

const colorsPrueba = ['red', 'blue', 'green']

console.log(getRandom(colorsPrueba))


// 5. Utiliza la función creada getRandom para utilizar colores aleatorios de una paleta que hayas escogido de coolors.co en los apartados anteriores.
// 6. Utiliza la función creada getRandom para utilizar gifs aleatorios en los apartados anteriores.
// 7. Ambos ya realizads arriba
