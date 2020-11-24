class Paper {
    constructor(x, y) {
      var options = {
          isStatic:false,
          restitution:0.5,
          friction:0.1,
          density:2
      }
      this.body = Bodies.circle(x, y, 20, options)
      this.radius=20;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      fill("red");
      ellipse(0, 0,this.radius*2,this.radius*2);
      pop();
    }
  };