class RigidBody {
  constructor(obj,mass){
    this.obj = obj;
    this.mass = mass;
    
    this.fallSpeed = 1;
  }
  calcGravity(){
    this.fallSpeed = this.mass ++;
    this.obj.position.dy += this.fallSpeed;
  }
  draw(context){
    obj.draw(context);
  }
}
