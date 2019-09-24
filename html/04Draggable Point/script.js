const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;


canvas.width = width;
canvas.height = height;

let blueCs = 0;
let mouse = new Vector2d(0,0);
let points = [];
for(let i = 0; i<4;i++){
  let  point = new Point(new Vector2d(getRandom(width),getRandom(height)), 20, 255,0,0,true);
  points.push(point);
}
function animate(){
  window.requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);
  points[0].draw(context);

}
function getRandom(max) {
  return Math.floor((Math.random() * max) + 1);
}
animate();
