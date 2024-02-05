class Sky
  {
    constructor()
    {
        this.stars = [];

        for (let i = 0; i<2; i++)
        {
         this.stars[i]= new Star();
        }
    } 
    
    show()
    {
      for (let i = 0; i<this.stars.length; i++)
      {
        this.stars[i].drawSprite();
        this.stars[i].move();
        this.stars[i].jitter();
      }
      
    }
  }