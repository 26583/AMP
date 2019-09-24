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
      console.log("I'm being dragged!");
    }
}
