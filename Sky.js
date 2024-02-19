class Sky
  {
    constructor()
    {
        this.stars = [];
<<<<<<< HEAD
        this.stars2 = []

        for (let i = 0; i<12; i++)
=======
        this.shootingStars=[];

        for (let i = 0; i<1; i=i+1)
        {
         this.shootingStars[i]= new Star();
        }


        for (let i = 0; i<20; i=i+1)
>>>>>>> 0786af2e20617050d3414a2feb5e61ae6290c55b
        {
         this.stars[i]= new Star("bigstar.png");
         this.stars2[i]= new Star("smallstar.png");
        }

    } 
    
    show()
    {
      for (let i = 0; i<this.stars.length; i=i+1)
      {
        this.stars[i].drawSprite();
<<<<<<< HEAD
        this.stars[i].move();
        this.stars[i].jitter();

        this.stars2[i].drawSprite();
        this.stars2[i].move();
        this.stars2[i].jitter();
=======
        this.stars[i].jitter();       

>>>>>>> 0786af2e20617050d3414a2feb5e61ae6290c55b
      }

for(let i = 0; i<this.shootingStars.length; i=i+1)
    {   
      
      this.shootingStars[i].shootingStar();
    
    }

      
    }
  }