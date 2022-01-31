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

//pyramid opacity interval
var interval;

//current opacity
var opacity = 0.4;

//current level of pyramid
var level = 0;

//about button functionality
aboutBtn.addEventListener("click", () => {
    if(opened === "home") {
        home.style.visibility = "hidden";
        about.style.visibility = "visible";
        opened = "about";

        opacity = 0.4;
        pyramidDraw(5, 0, 280);

        interval = setInterval(() => {
            if(level == 6) {
                ctx.clearRect(0, 0, pyramid.width, pyramid.height);
                opacity = 0.4;
                pyramidDraw(5, 0, 280);
                level = 0; 
            } else {
                opacity = 1;
                pyramidDraw(level, 0, 280);
                level++;
            }
        }, 1000);
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
    ctx.fillStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, ${opacity})`;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x+size, y);
    ctx.lineTo(x+size*0.5, y-( ( Math.sqrt(3) * size ) / 2 ));
    ctx.fill();
}

//home button functionality
homeBtn.addEventListener("click", () => {
    if(opened === "about") {
        home.style.visibility = "visible";
        about.style.visibility = "hidden";
        opened = "home";
        clearInterval(interval);
    }
});