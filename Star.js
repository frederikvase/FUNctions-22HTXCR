class Star extends Entity
  {
    constructor(filename)
    {
<<<<<<< HEAD
        super(filename, random(0,width), random(0,height), random(-1,1), random(-1,1), 10, 10);

        this.radius=random(3,7);
=======
        let star = "smallstar.png"; 
        let starSize = random(1,2); 
        
        super(star, random(0,width), random(0,height), random(-1,1), random(-1,1), starSize, starSize);
     
        this.r = random(2, 8);
>>>>>>> 0786af2e20617050d3414a2feb5e61ae6290c55b
        this.size=random(0,1);
        
        this.farve =[random(220,240),random(220,240),random(110,130)];

        this.glitterSpeed=random(-3,3);
        
<<<<<<< HEAD
        this.opacity=random(0,50);
=======
        this.o=random(50,100);
        this.alfa=0;
>>>>>>> 0786af2e20617050d3414a2feb5e61ae6290c55b
        this.weight=random(1,4);

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
<<<<<<< HEAD
     tint(this.farve[0],this.farve[1],this.farve[2]);
=======
      tint(this.farve[0],this.farve[1],this.farve[2],this.o);

>>>>>>> 0786af2e20617050d3414a2feb5e61ae6290c55b

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
<<<<<<< HEAD
        this.radius = random(1, 4);
=======
        this.r = random(2, 8);
>>>>>>> 0786af2e20617050d3414a2feb5e61ae6290c55b
      }
      


      fill(245, 229, 127,this.alfa);
      noStroke();
     ellipse(this.currentX, this.currentY, this.r, this.r);

    }
    
<<<<<<< HEAD
      drawShootingStar(){
      fill(245, 229, 127, 100);
      noStroke();
      ellipse(this.currentX, this.currentY, this.radius, this.radius);
    }
=======
>>>>>>> 0786af2e20617050d3414a2feb5e61ae6290c55b
  }