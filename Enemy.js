class Enemy extends Entity
{
    constructor(enemyType, xStart, speedX = 1)
    {
        let yStart = random(0, height); 
        let yFinish = random(0, height); 

        super("enemy" + [enemyType] +".png", xStart = - 20, yStart, speedX, 0, 1, 1);

        this.enemyType = enemyType;
        this.xStart = xStart;
        this.y1 = yStart;
        this.y2 = yFinish;
    }

    chooseFunction()
    {
        switch(enemyType) //If new function is added, add another case here
        {
            case 1:
                this.constantEntity();
                break;
            case 2:
                this.linearEntity();
                break;
            case 3:
                this.quadraticEntity();
                break;
            case 4:
                this.cubicEntity();
                break;
            case 5:
                this.exponentialEntity();
                break;
            case 6:
                this.logarithmicEntity();
                break;
            case 7:
                this.sinusEntity();
                break;
            case 8:
                this.rootEntity();
                break;
            case 9:
                this.piecewiseEntity();
                break;
            default:
                console.log("Invalid type");
                break;
        }
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
        this.x = this.x + this.xSpeed;
        this.y = this.y1;
    }

    //Entity that moves with a linear function
    linearEntity()
    {
        this.x = this.x + this.xSpeed;
        this.k = (this.y2 - this.y1) / ((width + (this.sprite.height * this.yScale) / 2) - this.xStart);
        this.startY = this.y1 - (this.k * this.xStart);
        this.y = (this.k * this.x) + this.startY;
    }

    //Entity that moves with a quadratic function
    quadraticEntity()
    {

    }

    //Entity that moves with a cubic function
    cubicEntity()
    {

    }

    //Entity that moves with a exponential function
    exponentialEntity()
    {

    }

    //Entity that moves with a logarithmic function
    logarithmicEntity()
    {
 
    }

    //Entity that moves with a sinus function/curve
    sinusEntity()
    {   

    }

    //Entity that moves with a root function
    rootEntity()
    {

    }

    //Entity that moves with different functions at different x-value intervals
    piecewiseEntity()
    {

    }
}