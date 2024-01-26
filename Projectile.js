class Projectile extends Entity
{
    constructor(imageFileName, x, x, xSpeed, ySpeed, xScale, yScale)
    {
        super(imageFileName, x, y, xSpeed, ySpeed, xScale, yScale);
    }

    checkCollision(other, minumumDistance)
    {
        //returns true if the distance between "this" object and the "other" object is less than "minumumDistance".
        return dist(this.x, this.y, other.x, other.y) < minumumDistance;
    }

    edgeCollision()
    {
        //if the projectile object reaches out of bounds, it should return true.
        if(this.x > width)
        {
            return true;
        }
        else if(this.x < 0)
        {
            return true;
        }
        else if(this.y < 0)
        {
            return true;
        }
        else if(this.y > height)
        {
            return true;
        }
    }
    
    

}