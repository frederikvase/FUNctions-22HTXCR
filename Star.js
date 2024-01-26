class Star extends Entity
  {
    constructor()
    {
        let filename = "somethingsomething.png";
        super(filename, random(-100,width+100), random(-100,height+100), random(-1,1), random(-1,1));

        this.x=random(-100,width+100);
        this.y=random(-100,height+100);
        this.xSpeed=random(-1,1);
        this.ySpeed=random(-1,1);

        this.r=random(3,7);
        this.size=random(0,1);
        

        this.glitterSpeed=random(-3,3);
        
        this.o=random(0,50);
        this.weight=random(1,4);

        this.angle=random(0,360);
    } 
    
    show()
    {
      
      push();


      noStroke();
      fill(255,this.o);
      circle(this.x,this.y,this.r/2);
      fill(245, 229, 127,this.o);
      circle(this.x,this.y,this.r);
      pop();
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
  }