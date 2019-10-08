const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(300,200),20,100,255,50,true);
let B = new Point(new Vector2d(1600,800),20,0,255,255,true);

let C = new Point(new Vector2d(1600,200),20,100,200,50,true);
let D = new Point(new Vector2d(300,800),20,0,255,255,true);

let S = new Point(new Vector2d(10,10),12,230,200,0,false);

let l = new LinearFunction(1, 1);
let m = new LinearFunction(1, 1);

function animate()
{
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);
  l.defineLineByTwoPoints(A, B);
  l.draw(context);
  m.defineLineByTwoPoints(C, D);
  m.draw(context);
  A.draw(context);
  B.draw(context);
  C.draw(context);
  D.draw(context);

  S.position.dx = (m.intercept-l.intercept)/(l.slope-m.slope);
  S.position.dy = (l.slope*S.position.dx)+l.intercept;

  S.draw(context);
}

animate();
