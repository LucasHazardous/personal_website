//retrieve all buttons
const homeBtn = document.getElementById("homeBtn");
const aboutBtn = document.getElementById("aboutBtn");

//get all sections
const home = document.getElementById("home");
const about = document.getElementById("about");

//get canvas
const pyramid = document.getElementById("pyramid");

//current opened section
var opened = "home";

//about button functionality
aboutBtn.addEventListener("click", (e) => {
    if(opened === "home") {
        home.style.visibility = "hidden";
        about.style.visibility = "visible";
        opened = "about";

       
        const ctx = pyramid.getContext('2d');
        ctx.fillRect(25, 25, 100, 100);
    }
});

//home button functionality
homeBtn.addEventListener("click", (e) => {
    if(opened === "about") {
        home.style.visibility = "visible";
        about.style.visibility = "hidden";
        opened = "home";
    }
});