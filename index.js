const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.style.width= 800;
canvas.style.height = 800;



function draw(){

}

function update(){
ctx.clearRect(0,0,canvas.width,canvas.height);
draw();
}

var interval = setInterval(update , )