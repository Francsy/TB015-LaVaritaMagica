// 1. Prevent default behavior when clicking. For example, if I click on a link, it won't take me to another page.
// Declare a variable that selects the HTML element.

let root = document.documentElement;

// We assign a function to be executed on the "click" event that prevents the default action from being executed when clicking on the element.

root.addEventListener("click", function (event) {
    event.preventDefault();
});

/* ALTERNATIVE OPTION:
root.onclick = function(event) {
  event.preventDefault();
} 
*/

// 2. When clicking on an element, several things will happen. It all depends on the type of element:
// 2.1 Images: Change the image to one of the GIFs you have in the assets folder with the name magic-*.

const images = document.querySelectorAll("img");
const gifs = ["/assets/magic-1.gif", "/assets/magic-2.gif", "/assets/magic-3.gif", "/assets/magic-4.gif", "/assets/magic-5.gif", "/assets/magic-6.gif"];

for (let i = 0; i < images.length; i++) {
    const image = images[i];
    image.onclick = function () {
        //let randomGif = gifs[Math.floor(Math.random()*gifs.length)]
        image.setAttribute("src", getRandom(gifs));
    };
};

/* 
EXTRA: Similar option but using .forEach

images.forEach(function(image) {
    image.onclick = function(event){
        let randomGif = gifs[Math.floor(Math.random() * gifs.length)];
        image.setAttribute("src", randomGif);
    }
})
*/

// 2.2 Paragraphs: Change the text color and background color to any random one.
// Color palette from coolors.co (exercises 5 and 6): 

const colors = ["#1B998B", "EBF5DF", "#8377D1", "#EF767A", "#E8871E"];

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
    const paragraph = paragraphs[i];
    paragraph.onclick = function () {
        paragraph.style.backgroundColor = getRandom(colors);
        paragraph.style.color = getRandom(colors);
    };
};

/* 
EXTRA: Using .forEach

paragraphs.forEach(function(paragraph) {
    paragraph.onclick = function(event){
        paragraph.style.color = "yellow";
        paragraph.style.backgroundColor =  "blue";
    }     
})
 */


// 2.3 blocks de article o section: Cambia el color de fondo.

const blocks = document.querySelectorAll("section, article");

for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    block.onclick = function () {
        block.style.backgroundColor = getRandom(colors);
    };
};

/*
EXTRA: Usando .forEach

blocks.forEach(function(sección) {
    block.onclick = function(event){
        block.style.backgroundColor =  "green";
    }
})
*/

// 3. When the cursor is over any of the following elements, follow the instructions below, and return the element to its original state when the cursor leaves.
// 3.1 Images: Change the image to the abracadabra.gif GIF.


for (let i = 0; i < images.length; i++) {
    const image = images[i];
    let temp = image.src;
    image.onmouseover = function () {
        image.setAttribute("src", "/assets/abracadabra.gif");
    }
    image.onmouseout = function () {
        image.setAttribute("src", temp);
    };
};



/* ALTERNATIVE OPTION: .forEach 
images.forEach(function(image) {

    let temp = image.src;

    image.onmouseover = function(event) {
        image.setAttribute("src", "/assets/abracadabra.gif");
    };
    image.onmouseout = function(event) {
        image.setAttribute("src", temp);
    }
}) 
*/

// 3.2 Paragraphs: Change the text color and background color to any random one.

for (let i = 0; i < paragraphs.length; i++) {
    const paragraph = paragraphs[i];
    let tempParrBackground = paragraph.style.backgroundColor;
    let tempParrColor = paragraph.style.color;
    paragraph.onmouseover = function () {
        paragraph.style.backgroundColor = getRandom(colors);
        paragraph.style.color = getRandom(colors);
    };
    paragraph.onmouseout = function () {
        paragraph.style.backgroundColor = tempParrBackground;
        paragraph.style.color = tempParrColor;
    };

};

// 3.3 Blocks of article or section: Background color different from that of the paragraph.

function getDifferentColor(colorsArr, currentColor) {
    const newArr = [...colorsArr];
    const index = newArr.indexOf(currentColor);
    if (index > -1) newArr.splice(index, 1);
    return getRandom(newArr);
};


for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    let tempblockFondo = block.style.backgroundColor;
    block.onmouseover = function (event) {
        const targetParagraph = event.target.closes('p');
        if (targetParagraph) {
            const paragraphColor = targetParagraph.style.backgroundColor;
            block.style.backgroundColor = getDifferentColor(colors, paragraphColor);
        }
        // block.style.backgroundColor = getRandom(colors)
    };
    block.onmouseout = function () {
        block.style.backgroundColor = tempblockFondo;
    };
}

// Premium
// 4. Create a function named getRandom that accepts an array with values and returns one of them randomly.

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const colorsPrueba = ['red', 'blue', 'green'];

console.log(getRandom(colorsPrueba));

// 5. Use the created getRandom function to use random colors from a palette you have chosen from coolors.co in the previous sections.
// 6. Use the created getRandom function to use random GIFs in the previous sections.
// Both already implemented above.