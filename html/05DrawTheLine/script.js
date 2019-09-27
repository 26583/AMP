const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;


canvas.width = width;
canvas.height = height;

let f = new LinearFunction(0.6,200);
for (var x = 0; x < width; x+=10) {
  let point = new Point(new Vector2d(x,f.calcY(x)),10,0,0,255,false);
  point.draw(context);
}
