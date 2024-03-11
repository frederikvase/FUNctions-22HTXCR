class Enemy extends Entity
{
    constructor(enemyType, x1 = -20, x2 = width / 2, x3 = width, speedX = 1)
    {
        let yStart = random(0, height); 
        let yMid = random(0, height);
        let yFinish = random(0, height); 

        super("enemy" + [enemyType] +".png", x1, yStart, speedX, 0, 1, 1);

        this.xSpeed = speedX;

        this.enemyType = enemyType;
        this.x1 = x1;
        this.x2 = x2;
        this.x3 = x3;
        this.y1 = yStart;
        this.y2 = yMid;
        this.y3 = yFinish;
        this.y = 0;

        switch(this.enemyType)
        {
            case 1:
                this.constantCoefficients();
                this.yCalc = this.constantEntity;
                break;
            case 2:
                this.linearCoefficients();
                this.yCalc = this.linearEntity;
                break;
            case 3:
                this.quadraticCoefficients();
                this.yCalc = this.quadraticEntity;
                break;
            case 4:
                this.cubicCoefficients();
                this.yCalc = this.cubicEntity;
                break;
            case 5:
                this.exponentialCoefficients();
                this.yCalc = this.exponentialEntity;
                break;
            case 6:
                this.logarithmicCoefficients();
                this.yCalc = this.logarithmicEntity;
                break;
            case 7:
                this.sinusCoefficients();
                this.yCalc = this.sinusEntity;
                break;
            case 8:
                this.rootCoefficients();
                this. yCalc = this.rootEntity;
                break;
            case 9:
                this.piecewiseCoefficients();
                this.yCalc = this.piecewiseEntity;
                break;
            default:
                console.log("Invalid type");
                break;
        }
    }

    enemyMove()
    {
       this.x = this.x + this.xSpeed; 
       this.y = this.yCalc(this.x);
    }

    //Returns the x- and y-coordinates of the hostile entity
    enemyCoordinates()
    {
        return [this.x, this.y];
    }

    //Checks for collision between hostile entity and player
    enemyPlayerCollision(playerCoords)
    {
        if((playerCoords[1] - this.y) / (this.playerCoords[0] - this.x) <= playerLength)
        {
            return true;
        }
        return false;
    }

    //Returns the hostile enemy's x-koordinate and can then be checked deleted if out of bounds (width)
    deleteEnemyEntity()
    {
        if(this.x >= width + (this.sprite.width / 2))
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    //If invisibility is confirmed, then turn down visibility of enemy
    invisibilityPeriod(invisibility)
    {
        if(invisibility == true)
        {

        }
    }

    //List of functions

    //Entity that moves with a constant function
    constantEntity()
    {
        return this.y1;
    }

    constantCoefficients()
    {

    }

    //Entity that moves with a linear function
    linearEntity()
    {

    }

    linearCoefficients()
    {
        
    }

    //Entity that moves with a quadratic function
    quadraticEntity()
    {
        //Calculate coefficients:
        let a = ((this.x3-this.x2)*(this.y2-this.y1)-(this.x2-this.x1)*(this.y3-this.y2))/(pow(this.x2,2)*this.x3 - pow(this.x1,2)*this.x2 - pow(this.x2,3) + pow(this.x1,2)*this.x2 - pow(this.x3,2)*x2 + pow(this.x2,3) + pow(this.x3,2)*x1 - pow(this.x2,2)*this.x1);
  
        let b = (this.y2 - this.y1 - (a*pow(x2,2)) + (a*(pow(this.x1,2))) ) / (this.x2-this.x1);
      
        let c = this.y1 - (a*this.x1) - (b*this.x1);
        
        return [a,b,c];

    }

    quadraticCoefficients()
    {
        
    }

    //Entity that moves with a cubic function
    cubicEntity()
    {

    }

    cubicCoefficients()
    {
        
    }

    //Entity that moves with a exponential function
    exponentialEntity()
    {

    }

    exponentialCoefficients()
    {
        
    }

    //Entity that moves with a logarithmic function
    logarithmicEntity()
    {

      this.y = this.a * log(this.x)+this.d;
      return(this.y);
    }

    logarithmicCoefficients()
    {
        this.a=(this.y2-this.y1)/(log(this.x2)-log(this.x1))
        this.d=this.y1-this.a*log(x1);
   
    }

    //Entity that moves with a sinus function/curve
    sinusEntity()
    {   

    }

    sinusCoefficients()
    {
        
    }

    //Entity that moves with a root function
    rootEntity()
    {

    }

    rootCoefficients()
    {
        
    }

    //Entity that moves with different functions at different x-value intervals
    piecewiseEntity()
    {

    }

    piecewiseCoefficients()
    {
        
    }
}