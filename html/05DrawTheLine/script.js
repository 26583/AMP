const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;


canvas.width = width;
canvas.height = height;
/*
let f = new LinearFunction(0.6,200);
for (var x = 0; x < width; x+=10) {
  let point = new Point(new Vector2d(x,f.calcY(x)),10,0,0,255,false);
  point.draw(context);
}
*/
let img = new Image();
let A = new Point(new Vector2d (200,200),15,240,200,0,true);
let B = new Point(new Vector2d (500,300),15,255,0,0,true);
A.draw(context);
B.draw(context);
img.src = "grid.png";
animate();
function animate() {
  window.requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);
  context.drawImage(img,0,0,width,height);
  context.fillStyle = "rgba(255,255,255,0.6)";
  context.fillRect(0,0,width,height);
  let l = new LinearFunction(1,133.3);
  l.defineLineBytwoPoints(A,B);
      context.beginPath();
      context.moveTo(0,l.calcY(0));
      context.lineTo(width,l.calcY(width));
      context.closePath();
      context.stroke();

  A.draw(context);
  B.draw(context);
  console.log("hoi");
}
