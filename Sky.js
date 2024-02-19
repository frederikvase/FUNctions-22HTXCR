class Sky
  {
    constructor()
    {
        this.stars = [];
        this.shootingStars=[];

        for (let i = 0; i<1; i=i+1)
        {
         this.shootingStars[i]= new Star();
        }


        for (let i = 0; i<20; i=i+1)
        {
         this.stars[i]= new Star();
        }

    } 
    
    show()
    {
      for (let i = 0; i<this.stars.length; i=i+1)
      {
        this.stars[i].drawSprite();
        this.stars[i].jitter();       

      }

for(let i = 0; i<this.shootingStars.length; i=i+1)
    {   
      
      this.shootingStars[i].shootingStar();
    
    }

      
    }
  }