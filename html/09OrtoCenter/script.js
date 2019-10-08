const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let  A = new Point(new Vector2d(100,100), 20, 255,0,0,true);
let  B = new Point(new Vector2d(500,100), 20, 0,0,255,true);
let  C = new Point(new Vector2d(300,500), 20, 0,255,0,true);
let  D = new Point(new Vector2d(0,0), 10, 200,195,0,true);
let l = new LinearFunction(1,1);
let k = new LinearFunction(1,1);
let m = new LinearFunction(1,1);
function animate(){
  window.requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);
  l.defineLineByTwoPoints(A,B);
  m.defineLineByTwoPoints(C,B);
  k.defineLineByTwoPoints(C,A);
  D.position.dx = (1/3)*(A.position.dx+B.position.dx+C.position.dx);
  D.position.dy = (1/3)*(A.position.dy+B.position.dy+C.position.dy);
  l.draw(context);
  m.draw(context);
  k.draw(context);
  C.draw(context);
  A.draw(context);
  B.draw(context);
  D.draw(context);
}
animate();
