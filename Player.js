class Player {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.8,
          'friction':1.3,
          'density':1.0,
          //isStatic:true
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.width = radius;
      this.height = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("blue");
      ellipse(0, 0, this.width, this.height);
      pop();
      //console.log (pos);
      if(pos.x<128 && pos.y>550){
        gamestate="won";
      }
    }
    move(x,y){
        Matter.Body.applyForce(this.body,this.body.position,{x:x,y:y})
    }
  };
  