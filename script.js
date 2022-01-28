//retrieve all buttons
const homeBtn = document.getElementById("homeBtn");
const aboutBtn = document.getElementById("aboutBtn");

//get all sections
const home = document.getElementById("home");
const about = document.getElementById("about");

//get canvas
const pyramid = document.getElementById("pyramid");

//context for drawing
const ctx = pyramid.getContext('2d');

//triangle size
const size = 10;

//current opened section
var opened = "home";

//about button functionality
aboutBtn.addEventListener("click", (e) => {
    if(opened === "home") {
        home.style.visibility = "hidden";
        about.style.visibility = "visible";
        opened = "about";

        pyramidDraw(5, 0, 280);
    }
});

//draw entire pyramid at seleted postion with selected complexity
function pyramidDraw(a, x, y) {
    if(a == 0) {
        triangle(x, y);
    } else {
        pyramidDraw(a-1, x, y);
        pyramidDraw(a-1, x+Math.pow(2, a-1)*size, y);
        pyramidDraw(a-1, x+Math.pow(2, a-2)*size, y-( ( Math.sqrt(3) * size ) / 2 )*Math.pow(2, a-1));
    }
}

//function for drawing a single triangle on a canvas
function triangle(x, y) {
    ctx.fillStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.4)`;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x+size, y);
    ctx.lineTo(x+size*0.5, y-( ( Math.sqrt(3) * size ) / 2 ));
    ctx.fill();
}

//home button functionality
homeBtn.addEventListener("click", (e) => {
    if(opened === "about") {
        home.style.visibility = "visible";
        about.style.visibility = "hidden";
        opened = "home";
    }
});