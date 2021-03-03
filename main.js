canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
var roverwidth = 100;
var roverheight = 90;
background_image= "mars.jpg";
rover_image = "rover.png";
var rover_x= 10;
var rover_y = 10;

function add(){
    background_imagetag= new Image();
    background_imagetag.onload = uploadBackground;
    background_imagetag.src = background_image;
    
    rover_imagetag= new Image();
    rover_imagetag.onload = uploadRover;
    rover_imagetag.src = rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_imagetag, 0,0,canvas.width, canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_imagetag,rover_x,rover_y,roverwidth, roverheight);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e){
keypressed= e.keyCode;
console.log(keypressed);

if(keypressed == '38'){
    up();
    console.log("up");
} 
if(keypressed == '40'){
    down();
    console.log("down");
}
if(keypressed == '37'){
    left();
    console.log("left");
}
if(keypressed == '39'){
    right();
    console.log("right");
}
}
function up(){
    if(rover_y>=0){
        rover_y -=10;
        console.log("when up arrow is pressed =" + rover_x + "-" + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function down(){
    if(rover_y<=500){
    rover_y +=10;
    console.log("when down arrow is pressed =" + rover_x + "-" + rover_y);
    uploadBackground();
    uploadRover();
    }
}
function right(){
    if(rover_x<=700){
        rover_x +=10;
        console.log("when right arrow is pressed =" + rover_x + "-" + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function left(){
    if(rover_x>=0){
        rover_x -=10;
        console.log("when left arrow is pressed =" + rover_x + "-" + rover_y);
        uploadBackground();
        uploadRover();
    }
}