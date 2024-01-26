class EnemyEntities extends entityClass
{
    constructor(x, y, xSpeed)
    {
        super(x, y, xSpeed);

        this.xStart = this.x;
    }

    //Movement test for entities, will eventually be deleted
    TemporaryMovement()
    {

    }

    //Returns the x- and y-coordinates of the hostile entity
    EntityCoordinates()
    {
        return [this.x, this.y];
    }

    //Checks for collision between hostile entity and player
    EntityPlayerCollision(playerCoords)
    {

    }

    //Entity that moves with a constant function
    ConstantEntity()
    {
        this.x = this.x + this.xSpeed;
        this.k = this.y1;
        this.y = this.k * 1;
    }

    //Entity that moves with a linear function
    LinearEntity()
    {
        this.x = this.x + this.xSpeed;
        this.k = (this.y2 - this.y1) / width + (this.diameter / 2);
        this.flytY = this.y1 - (this.k * this.xStart);
        this.y = (this.k * this.x) + this.flytY;
    }

    //Entity  that moves with a quadratic function
    QuadraticEntity()
    {
        this.x = this.x + this.xSpeed;
        this.k = (this.y1 - this.y2) / (pow(this.xStart, this.p) - pow(width + (this.diameter / 2), this.p));
        this.flytY = this.y1 - this.k * pow(this.xStart, this.p);
        this.y = this.k * (this.x * this.x) + this.flytY;
    }

    //Entity that moves with a cubic function
    CubicEntity()
    {
        this.x = this.x + this.xSpeed;
        this.k = (this.y1 - this.y2) / (pow(this.xStart, this.p) - pow(width + (this.diameter / 2), this.p));
        this.flytY = this.y1 - this.k * pow(this.xStart, this.p);
        this.y = this.k * (this.x * this.x * this.x) + this.flytY; 
    }

    //Entity that moves with a exponential function
    ExponentialEntity()
    {
        this.x = this.x + this.xSpeed;
        this.potens = this.y2 / (this.y1 * (width + (this.diameter / 2) - this.xStart));
        this.a = pow(10, this.potens);
        this.k = this.y2 / (pow(this.a, width + (this.diameter / 2)));
        this.y = this.k * (pow(this.a, this.x));
    }

    //Entity that moves with a logarithmic function
    LogarithmicEntity()
    {

    }

    //Entity that moves with a sinus function/curve
    SinusEntity()
    {

    }

    //Entity that moves with a root function
    RootEntity()
    {
        this.x = this.x + this.xSpeed;
        this.k = (this.y1 - this.y2) / (pow(this.xStart,  this.p));
        this.flytY = this.y1 - this.k * (pow(this.xStart, this.p));
        this.y = this.k * (pow(this.x, this.p)) + this.flytY;
    }
}