class Enemy extends Entity
{
    constructor(enemyType, xl = -20, speedX = 1)
    {
        let yStart = random(0, height); 
        let yMid = random(0, height);
        let yFinish = random(0, height); 

        super("enemy" + [enemyType] +".png", xl, yStart, speedX, 0, 1, 1);

        this.xSpeed = speedX;

        this.enemyType = enemyType;
        this.xl = xl; //Same as x1
        this.xm = width / 2; //For the functions that need three points (same as x2 if there is three points)
        this.xr = width; //Same as x2 (unless it one with three points, then it is x3)
        this.yl = yStart;
        this.ym = yMid;
        this.yr = yFinish;
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
        return this.yl;
    }

    constantCoefficients()
    {

    }

    //Entity that moves with a linear function
    linearEntity()
    {
        
        return this.a * this.x + this.b;
    }

    linearCoefficients()
    {
        this.a = (this.yr - this.yl)/(this.xr - this.xl);
        this.b = this.yl - this.a * this.xl;
    }

    //Entity that moves with a quadratic function
    quadraticEntity()
    {
        return(this.a * pow(this.x,2) + this.b * this.x + this.c);
    }

    quadraticCoefficients()
    {
        this.a = ((this.xr-this.xm)*(this.ym-this.yl)-(this.xm-this.xl)*(this.yr-this.ym))/(pow(this.xm,2)*this.xr - pow(this.xl,2)*this.xm - pow(this.xm,3) + pow(this.xl,2)*this.xm - pow(this.xr,2)*this.xm + pow(this.xm,3) + pow(this.xr,2)*this.xl - pow(this.xm,2)*this.xl);

        this.b = (this.ym - this.yl - (this.a*pow(this.xm,2)) + (this.a*(pow(this.xl,2))) ) / (this.xm-this.xl);
        
        this.c = this.yl - (this.a*this.xl) - (this.b*this.xl);    
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
        this.a=(this.yr-this.yl)/(log(this.xr)-log(this.xl))
        this.d=this.yl-this.a*log(xl);
   
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