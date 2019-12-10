const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(200,200),20,255,0,0,true);
let B = new Point(new Vector2d(500,400),20,0,255,0,true);
let C = new Point(new Vector2d(0,0),20,0,0,255,true);
let diff = new Vector2d(0,0);
C.position.dx += A.position.dx;
C.position.dy += A.position.dy;
function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);
  context.beginPath();
  context.moveTo(A.position.dx,A.position.dy);
  context.lineTo(B.position.dx,B.position.dy);
  context.closePath();
  context.stroke();
  A.draw(context);
  B.draw(context);

  diff.differenceVector(B.position,C.position);
  diff.dx = diff.dx/diff.magnitude;
  diff.dy = diff.dy/diff.magnitude;
  C.position.dx +=diff.dx;
  C.position.dy +=diff.dy;
  C.draw(context);
  console.log(diff);
}

animate()
