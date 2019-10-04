class Point {
    constructor(position,size,r,g,b, draggable){
        this.position = position;
        this.size = size;
        this.r = r;
        this.g = g;
        this.b = b;
        this.draggable = draggable;
        if(this.draggable){
          this.drag();
        }
    }
    draw(context){
        context.beginPath();
        context.strokeStyle = "black";
        context.lineWidth = 7;
        context.fillStyle = "rgb("+this.r+","+this.g+","+this.b+")";
        context.arc(this.position.dx,this.position.dy,this.size,0,2*Math.PI);
        context.stroke();
        context.fill();
        context.closePath();
    }

    drag(){
      //console.log("I'm being dragged!");
      let dragging = false;
      window.addEventListener('mousedown',(evt)=>{
        //console.log(evt.clientX, evt.clientY);
        let mouse = new Vector2d(evt.clientX,evt.clientY);
        let d = new Vector2d(0,0);
        d.differenceVector(mouse,this.position);
        if(d.magnitude<this.size){
          console.log("yeah, lets go");
          dragging = true;
        }
        else{
          dragging= false;
        }
      });
      window.addEventListener('mouseup',(evt)=>{
        dragging = false;
      });
      window.addEventListener('mousemove',(evt)=>{
        if(dragging){
          //document.body.style.cursor = *cursor-url*;

          this.position.dx = evt.clientX;
          this.position.dy = evt.clientY;
        }
        let mouse = new Vector2d(evt.clientX,evt.clientY);
        let d = new Vector2d(0,0);
        d.differenceVector(mouse,this.position);
        //console.log(d.magnitude);

        if(d.magnitude<this.size){
          document.body.style.cursor = "pointer";
          evt.stopImmediatePropagation();
        }
        else{
          document.body.style.cursor = "auto";
        }

      })
    }
}
