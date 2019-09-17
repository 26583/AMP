const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;


canvas.width = width;
canvas.height = height;

let blueCs = 0;
let mouse = new Vector2d(0,0);
let points = [];
for(let i = 0; i<10;i++){
  let  point = new Point(new Vector2d(getRandom(width),getRandom(height)), 20, 255,0,0);
  //point.draw(context);
  points.push(point);
}
function animate(){
  window.requestAnimationFrame(animate);
  for(let i = 0; i<points.length;i++){
    points[i].draw(context);
  }
  if(blueCs>=10){
    window.location.reload();
  }
}
//point.draw(context);
function getRandom(max) {
  return Math.floor((Math.random() * max) + 1);

}
/*
let point = new Point(new Vector2d(Math.floor((Math.random() * window.innerWidth) + 1),Math.floor((Math.random() * window.innerHeight) + 1)),50,255,0,0)
let point2 = new Point(new Vector2d(Math.floor((Math.random() * window.innerWidth) + 1),Math.floor((Math.random() * window.innerHeight) + 1)),50,255,0,0)
let point3 = new Point(new Vector2d(Math.floor((Math.random() * window.innerWidth) + 1),Math.floor((Math.random() * window.innerHeight) + 1)),50,255,0,0)
let point4 = new Point(new Vector2d(Math.floor((Math.random() * window.innerWidth) + 1),Math.floor((Math.random() * window.innerHeight) + 1)),50,255,0,0)
let mouseVector = new Vector2d(0,0);
let d = new Vector2d(0,0);
d.differenceVector(point.position,mouseVector);

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
    d.differenceVector(point2.position,mouseVector);
    console.log(d.magnitude);
    if(d.magnitude < point2.size){
      console.log("yes");
      if(point2.r ==255){
        blueCs ++;
      }
      point2.r = 0;
      point2.b = 255;
      point2.draw(context);
      //blueCs ++;
      if(blueCs == 4){
        console.log("hoi");
        window.location.reload();
      }
    }

    d.differenceVector(point3.position,mouseVector);
    console.log(d.magnitude);
    if(d.magnitude < point3.size){
      console.log("yes");
      if(point3.r ==255){
        blueCs ++;
      }
      point3.r = 0;
      point3.b = 255;
      point3.draw(context);
      //blueCs ++;
      if(blueCs == 4){
        console.log("hoi");
        window.location.reload();
      }
    }

    d.differenceVector(point4.position,mouseVector);
    console.log(d.magnitude);
    if(d.magnitude < point4.size){
      console.log("yes");
      if(point4.r ==255){
        blueCs ++;
      }
      point4.r = 0;
      point4.b = 255;
      point4.draw(context);
      //blueCs ++;
      if(blueCs == 4){
        console.log("hoi");
        window.location.reload();
      }
    }

})
console.log(blueCs);
if(blueCs == 4){
  console.log("hoi");
  window.location.reload();
}
point.r = 255;
point.draw(context);

point2.draw(context);
point3.draw(context);
point4.draw(context);
console.log(mouseVector);
*/
//window.requestAnimationFrame(animate);
window.addEventListener("click",(evt)=>{
  mouse.dx = evt.clientX;
  mouse.dy = evt.clientY;
  for(let i = 0; i<points.length;i++){
    let dif = new Vector2d(0,0);
    dif.differenceVector(mouse,points[i].position)
    console.log(dif.magnitude);
    if((dif.magnitude<points[i].size)&&(points[i].r==255)){
      points[i].r = 0;
      points[i].b = 255;
      blueCs++;
    }

  }
});
animate();
