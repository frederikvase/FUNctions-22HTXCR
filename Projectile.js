class Projectile extends Entity
{
    constructor(imageFileName, x, x, xSpeed, ySpeed, xScale, yScale)
    {
        super(imageFileName, x, y, xSpeed, ySpeed, xScale, yScale);
    }

    show()
    {
        //We show our image relative to the correspondant x, y positions and scaling them to the correspondant scale values
        image(imageFileName, this.x, this.y, this.xScale, this.yScale)
    }

    update()
    {
        this.x = this.x + this.xSpeed;
        this.y = this.y + this.ySpeed;
    }

    checkCollision(other, minumumDistance)
    {
        //returns true if the distance between "this" object and the "other" object is less than "minumumDistance"
        return dist(this.x, this.y, other.xPosition, this.yPosition) < minumumDistance;
    }



}