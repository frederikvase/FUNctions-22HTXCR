class Enemy extends Entity
{
    constructor(enemyType, x1 = -20, x2 = width / 2, x3 = width, speedX = 1)
    {
        let yStart = random(0, height); 
        let yMid = random(0, height);
        let yFinish = random(0, height); 

        super("enemy" + [enemyType] +".png", x1, yStart, speedX, 0, 1, 1);

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
 
    }

    logarithmicCoefficients()
    {
        
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