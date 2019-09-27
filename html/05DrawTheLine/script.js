const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;


canvas.width = width;
canvas.height = height;

let blueCs = 0;
let mouse = new Vector2d(0,0);
let points = [];
for(let i = 0; i<3;i++){
  let  point = new Point(new Vector2d(getRandom(width),getRandom(height)), 20, 255,0,0,true);
  points.push(point);
}
function animate(){
  window.requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);
  context.fillStyle = "#fff5c6";
    context.beginPath();
    context.moveTo(points[0].position.dx,points[0].position.dy);
    context.lineTo(points[1].position.dx,points[1].position.dy);
    context.lineTo(points[2].position.dx,points[2].position.dy);
    context.fill();
    for(let i = 0; i<points.length;i++){
      points[i].draw(context);
    }

}
window.addEventListener("mousemove",(evt)=>{
  let anyHover = false;
  let mouse = new Vector2d(evt.clientX,evt.clientY);
  let d = new Vector2d(0,0);
  for (var i = 0; i < points.length; i++) {
    d.differenceVector(mouse,points[i].position);
    if(d.magnitude<points[i].size){
      anyHover = true;
    }
  }
  if(!anyHover){
    document.body.style.cursor = "auto";
  }
});
function getRandom(max) {
  return Math.floor((Math.random() * max) + 1);
}
animate();
