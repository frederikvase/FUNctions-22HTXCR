class Enemy extends Entity
{
    constructor(enemyType)
    {
        let yStart = random(0, height); 
        let yFinish = random(0, height); 

        super("enemy1.png", -20, yStart, 3, 0, 1, 1);

        this.xStart = this.x;
        this.y1 = yStart;
        this.y2 = yFinish;

        // this.enemyEntitySpeed = xSpeed;

        // this.diameter = diameter;
    }

    choseFunction(functionType)
    {
        switch(functionType) //If new function is added, add another case here
        {
            case "constant":
                this.constantEntity();
                break;
            case "linear":
                this.linearEntity();
                break;
            case "quadratic":
                this.quadraticEntity();
                break;
            case "cubic":
                this.cubicEntity();
                break;
            case "exponential":
                this.exponentialEntity();
                break;
            case "sinus":
                this.sinusEntity();
                break;
            case "root":
                this.rootEntity();
                break;
            case "piecewise":
                this.piecewiseEntity();
                break;
            default:
                console.log("Invalid type");
                break;

        }
    }

    //Returns the x- and y-coordinates of the hostile entity
    entityCoordinates()
    {
        return [this.x, this.y];
    }

    //Checks for collision between hostile entity and player
    entityPlayerCollision(playerCoords)
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
        this.k = (this.y2 - this.y1) / (width + (this.sprite.height * this.yScale) / 2);
        this.flytY = this.y1 - (this.k * this.xStart);
        this.y = (this.k * this.x) + this.flytY;
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