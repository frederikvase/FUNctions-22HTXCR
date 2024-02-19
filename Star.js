class Star extends Entity
  {
    constructor()
    {
        let star = "smallstar.png"; 
        let starSize = random(1,2); 
        
        super(star, random(0,width), random(0,height), random(-1,1), random(-1,1), starSize, starSize);
     
        this.radius = random(2, 8);
        this.size=random(0,1);
        
        this.color =[random(220,240),random(220,240),random(110,130)];

        this.glitterSpeed=random(-3,3);
        
        this.opacity=random(50,100);
        this.alfa=0;
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
  

    
    jitter()
    {
      tint(this.color[0],this.color[1],this.color[2],this.opacity);


      this.opacity=this.opacity+this.glitterSpeed;
      if(this.opacity>70 || this.opacity<0)
      {
      this.glitterSpeed=this.glitterSpeed*-1;
      }

      this.xSpeed=random(-0.15,0.15);
      this.ySpeed=random(-0.15,0.15);
      
      this.x=this.x+this.xSpeed;
            this.y=this.y+this.ySpeed;

    }
    shootingStar(){
      // moves the shooiting star
      this.currentX = lerp(this.currentX, this.endX, 0.01);
      this.currentY = lerp(this.currentY, this.endY, 0.02);
  
     
      // Finds 95% of the distance between the two points in wich the shooting star travels
      const afstand = dist(this.currentX, this.currentY, this.startX, this.startY);

               //determines 
             this.alfa=this.alfa+(this.glitterSpeed*2);
              if(this.alfa>200)
              {
              this.glitterSpeed=this.glitterSpeed*-2;
              }


      // Starts the shooting star again when it reaches 95% of the distance
      if (afstand > this.maxDistance * 0.95) {
        this.alfa=0;
        this.glitterSpeed=(this.glitterSpeed*-1)/2;
        this.startX = random(0, 400);
        this.startY = random(0, 400);
        this.currentX = this.startX;
        this.currentY = this.startY;
        this.endX = random(0, width);
        this.endY = random(0, height);
        this.maxDistance = dist(this.startX, this.startY, this.endX, this.endY);
        this.radius = random(2, 8);
      }
      


      fill(245, 229, 127,this.alfa);
      noStroke();
     ellipse(this.currentX, this.currentY, this.radius, this.radius);

    }
    
  }