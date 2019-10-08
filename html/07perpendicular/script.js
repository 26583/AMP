const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let  A = new Point(new Vector2d(100,100), 20, 255,0,0,true);
let  B = new Point(new Vector2d(500,100), 20, 0,0,255,true);

let  C = new Point(new Vector2d(300,500), 20, 0,255,0,true);
let l = new LinearFunction(1,1);

let m = new LinearFunction(1,1);
function animate(){
  window.requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);
  context.fillStyle = "#fff5c6";
  l.defineLineByTwoPoints(A,B);
  l.draw(context);
  m.slope = -(1/l.slope);
  m.intercept = C.position.dy - m.slope * C.position.dx;
  m.draw(context);
  A.draw(context);
  B.draw(context);
  C.draw(context);
}
animate();
