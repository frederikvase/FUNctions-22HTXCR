class EnemyEntities extends entityClass
{
    constructor(x, xSpeed, diameter, enemySpriteArr)
    {
        super(x, xSpeed);

        this.xStart = x;
        this.y1 = random(0, height);
        this.y2 = random(0, height);

        this.enemySprite = enemySpriteArr[int(random(0, enemySprite.length))];

        this.enemyEntitySpeed = xSpeed;

        this.diameter = diameter;
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

    deleteEnemyEntity()
    {
        return this.x;
    }

    //Draws the entity when called
    show()
    {
        imageMode(CENTER);
        image(this.enemySprite, this.x, height - this.y, this.diameter, this.diameter);
    }

    //List of functions

    //Entity that moves with a constant function
    constantEntity()
    {
        this.x = this.x + this.enemyEntitySpeed;
        this.y = random(0 + (this.diameter / 2), height - (this.diameter / 2));
    }

    //Entity that moves with a linear function
    linearEntity()
    {
        this.x = this.x + this.HostileEntitySpeed;
        this.k = (this.y2 - this.y1) / (width + (this.diameter / 2));
        this.flytY = this.y1 - (this.k * this.xStart);
        this.y = (this.k * this.x) + this.flytY;
    }

    //Entity  that moves with a quadratic function
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