class Projectile extends Entity
{
    constructor(imageFileName_, x_, y_, xSpeed_, y_Speed_, x_Scale_=1, y_Scale_=1)
    {
        //steal entity_ attributes >:)
        super(imageFileName_, x_, y_, xSpeed_, y_Speed_, x_Scale_, y_Scale_);
    }

    moveProj()
    {
        this.x = this.x + this.xSpeed;
        this.y = this.y + this.ySpeed;
    }

    checkCollision(other, minumumDistance)
    {
        //returns true if the distance between "this" object and the "other" object is less than "minumumDistance".
        return dist(this.x, this.y, other.x, other.y) < minumumDistance;
    }

    edgeCollision()
    {
        //if the projectile object reaches out of bounds, it should return true.
        return (this.x > width || this.x < 0 || this.y < 0 || this.y > height);
    }
    
    checkDistance(other)
    {
        //returns the distance of this and other
        return dist(this.x, this.y, other.x, other.y);
    }

    homing(other, my_HomingSpeed=3)
    {
        //first find the angle between this and other
        let angle = atan2(other.y - this.y, other.x - this.x);
        let homingSpeed = my_HomingSpeed;

        //sets the speed to match the direction of other akumala akumala
        this.x_Speed = homingSpeed * cos(angle);
        this.y_Speed = homingSpeed * sin(angle);
    }
}