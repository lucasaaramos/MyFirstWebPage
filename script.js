
let time = 3000,

currentImageIndex = 0,
images = document.querySelectorAll ("#slider img")
max = images.length;


function nextImage() {

    images[currentImageIndex].classList.remove("selected")

    currentImageIndex++;

    if (currentImageIndex >= max) 
    currentImageIndex = 0;

    images[currentImageIndex].classList.add("selected")

}




function start () {

    setInterval(() => {

        //troca de imagem
        nextImage()

    }, time)
}

window.addEventListener("load", start)


function myFunction_html() {

    
        var x = document.getElementById("video_html");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
    
}  


function myFunction_css() {

    
  var x = document.getElementById("video_css");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

} 

function myFunction_js() {

    
  var x = document.getElementById("video_js");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

}





//tested the example below but i prefered the "controls" model than this control

var myVideo = document.getElementById("video"); 

function playPause() { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 

function makeBig() { 
    myVideo.width = 560; 
} 

function makeSmall() { 
    myVideo.width = 320; 
} 

function makeNormal() { 
    myVideo.width = 420; 
} 
