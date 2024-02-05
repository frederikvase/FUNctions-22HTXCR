class Projectile extends Entity_
{
    constructor(imageFileName_, x_, y__, xSpeed_, y_Speed_, x_Scale_=1, y_Scale_=1)
    {
        //steal entity_ attributes >:)
        super(imageFileName_, x, y_, xSpeed_, y_Speed, x_Scale_, y_Scale_);
    }

    checkCollision(other, minumumDistance)
    {
        //returns true if the distance between "this" object and the "other" object is less than "minumumDistance".
        return dist(this.x_, this.y_, other.x_, other.y_) < minumumDistance;
    }

    edgeCollision()
    {
        //if the projectile object reaches out of bounds, it should return true.
        return this.x_ > width || this.x_ < 0 || this.y_ < 0 || this.y_ > height;
    }
    
    checkDistance(other)
    {
        //returns the distance of this and other
        return dist(this.x_, this.y_, other.x_, other.y_);
    }

    homing(other, my_HomingSpeed=3)
    {
        //first find the angle between this and other
        let angle = atan2(other.y_ - this.y_, other.x_ - this.x_);
        let homingSpeed = my_HomingSpeed;

        //sets the speed to match the direction of other akumala akumala
        this.x_Speed = homingSpeed * cos(angle);
        this.y_Speed = homingSpeed * sin(angle);
    }

}