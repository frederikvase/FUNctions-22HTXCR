class EnemyEntities extends entityClass
{
    constructor(x, xSpeed, diameter)
    {
        super(x, xSpeed);

        this.xStart = x;
        this.y1 = random(0, 400);
        this.y2 = random(0, 400);

        this.HostileEntitySpeed = xSpeed;

        this.diameter = diameter;
    }

    choseFunction(functionType)
    {
        switch(functionType) //If new function is added, add another case here that matches the type of function
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
            //Lose life
        }
    }

    show()
    {
        circle(this.x, height - this.y, this.diameter);
    }

    //List of functions

    //Entity that moves with a constant function
    constantEntity()
    {
        this.x = this.x + this.HostileEntitySpeed;
        this.y = random(0 + (this.diameter / 2), height - (this.diameter / 2));
    }

    //Entity that moves with a linear function
    linearEntity()
    {

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
}