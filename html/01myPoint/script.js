const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

function animate(){
  window.requestAnimationFrame(animate);
  let A = new Point(new Vector2d(Math.floor((Math.random() * window.innerWidth) + 1),Math.floor((Math.random() * window.innerHeight) + 1))
  ,Math.floor((Math.random() * 70) + 20),Math.floor((Math.random() * 255) + 1),Math.floor((Math.random() * 255) + 1),Math.floor((Math.random() * 255) + 1));
  A.draw(context);
}
window.addEventListener('click',(evt)=>{
  mouseVector.dx = evt.clientX;
  mouseVector.dy = evt.clientY;
  d.differenceVector(point.position,mouseVector);
  console.log(d.magnitude);
  if(d.magnitude < point.size){
    console.log("yes");
    if(point.r ==255){
      blueCs ++;
    }
    point.r = 0;
    //blueCs ++;
    point.b = 255;
    console.log(point.r);
    point.draw(context);
    if(blueCs == 4){
      console.log("hoi");
      window.location.reload();
    }
  }
})
window.requestAnimationFrame(animate);
