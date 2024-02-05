class Projectile extends Entity
{
    constructor(imageFileName, x, x, xSpeed, ySpeed, xScale, yScale)
    {
        //steal entity attributes >:)
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
        return this.x > width || this.x < 0 || this.y < 0 || this.y > height;
    }
    
    checkDistance(other)
    {
        //returns the distance of this and other
        return dist(this.x, this.y, other.x, other.y);
    }

    homing(other)
    {
        //first find the angle between this and other
        let angle = atan2(other.y - this.y, other.x - this.x);
        let homingSpeed = 3;

        //sets the speed to match the direction of other akumala akumala
        this.xSpeed = homingSpeed * cos(angle);
        this.ySpeed = homingSpeed * sin(angle);
    }

}