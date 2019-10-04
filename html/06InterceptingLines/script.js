const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;


canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2D(200,200),255,0,0,20,true);

animate();
function animate() {
  window.requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);
  A.draw(context);
}
