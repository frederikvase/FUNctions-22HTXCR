class Sky
  {
    constructor()
    {
        this.stars = [];




        for (let i = 0; i<100; i=i+1)
        {
         this.stars[i]= new Star();
        }

    } 
    
    show()
    {

      for (let i = 0; i<this.stars.length; i=i+1)
      {
        this.stars[i].drawSprite();
        this.stars[i].move();
        this.stars[i].jitter();
      }

      
    }
  }