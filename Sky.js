class Sky
  {
    constructor()
    {
        this.stars = [];
        this.stars2 = []

        for (let i = 0; i<12; i++)
        {
         this.stars[i]= new Star("bigstar.png");
         this.stars2[i]= new Star("smallstar.png");
        }
    } 
    
    show()
    {
      for (let i = 0; i<this.stars.length; i++)
      {
        this.stars[i].drawSprite();
        this.stars[i].move();
        this.stars[i].jitter();

        this.stars2[i].drawSprite();
        this.stars2[i].move();
        this.stars2[i].jitter();
      }
      
    }
  }