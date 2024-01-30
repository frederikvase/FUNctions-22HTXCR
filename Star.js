class Star extends Entity
  {
    constructor()
    {
        let filename = "storstjerne.png";
        super(filename, random(0,width/2), random(0,height/2), random(-1,1), random(-1,1), 30, 30);

        this.r=random(3,7);
        this.size=random(0,1);
        
        this.farve = [random(220,255),random(200,255),random(100,130)];

        this.glitterSpeed=random(-3,3);
        
        this.o=random(0,50);
        this.weight=random(1,4);

        this.angle=random(0,360);

        // variables for shoothing star
        this.startX = random(0, width);
        this.startY = random(0, height);
        this.endX = random(0, width);
        this.endY = random(0, height);
        this.currentX = this.startX;
        this.currentY = this.startY;
        this.maxDistance = dist(this.startX, this.startY, this.endX, this.endY);

        
    } 
    
    starShow()
    {
      
      push();
      noStroke();
      fill(255,this.o);
      circle(this.x,this.y,this.r/2);
      fill(245, 229, 127,this.o);
      circle(this.x,this.y,this.r);
      pop();
      
      imageMode(CENTER);
      tint(255,255,255,this.o);
      image(filename,200,200);

      
    }

    special()
    {
      push();
      //this.angle=this.angle+0.1;
      stroke(245, 229, 127,this.o);
      strokeWeight(this.weight);

      rotate(this.angle);
      line(this.x,this.y-(this.r*this.size),this.x,this.y+(this.r*this.size));
      line(this.x-(this.r*this.size),this.y,this.x+(this.r*this.size),this.y);
  
       pop();
    }
    
    jitter()
    {
      this.o=this.o+this.glitterSpeed;
      if(this.o>70 || this.o<0)
      {
      this.glitterSpeed=this.glitterSpeed*-1;
      }

      this.xSpeed=random(-0.15,0.15);
      this.ySpeed=random(-0.15,0.15);
      
      this.x=this.x+this.xSpeed;
            this.y=this.y+this.ySpeed;
    }
    updateShootingStar(){
      // moves the shooiting star
      this.currentX = lerp(this.currentX, this.endX, 0.01);
      this.currentY = lerp(this.currentY, this.endY, 0.02);
  
      // Finds 95% of the distance between the two points in wich the shooting star travels
      const afstand = dist(this.currentX, this.currentY, this.startX, this.startY);

      // Starts the shooting star again when it reaches 95% of the distance
      if (afstand > this.maxDistance * 0.95) {
        this.startX = random(0, 400);
        this.startY = random(0, 400);
        this.currentX = this.startX;
        this.currentY = this.startY;
        this.endX = random(0, width);
        this.endY = random(0, height);
        this.maxDistance = dist(this.startX, this.startY, this.endX, this.endY);
        this.r = random(1, 4);
      }
      
    }
    
      drawShootingStar(){
      fill(245, 229, 127, 100);
      noStroke();
      ellipse(this.currentX, this.currentY, this.r, this.r);
    }
  }