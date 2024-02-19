// This player type only moves horizontally

class Player extends Entity
{
    constructor(maxSpeed, acc, scale, distanceToEdge, mostShotsPerSecond, bulletSpeed)
    {
        super("player90.png", width - scale * 30 - distanceToEdge, height / 2, 0, 0, scale, scale);
        
        // Player movement
        this.maxSpeed = maxSpeed;
        this.acc = acc;

        // Player shooting
        this.bullets = [];
        this.bulletSpeed = bulletSpeed;
        this.shootTimer = 0;
        this.mostShotsPerSecond = mostShotsPerSecond;
    }

    handleInput()
    {
        let dt = 1/30;

        if(keyIsDown(87)) // W
        {
            if (this.ySpeed > -this.maxSpeed)
                this.setSpeedY(this.ySpeed - this.acc * dt);
            else
                this.setSpeedY(-this.maxSpeed);
        }
        if(keyIsDown(83)) // S
        {
            if (this.ySpeed < this.maxSpeed)
                this.setSpeedY(this.ySpeed + this.acc * dt);
            else
                this.setSpeedY(this.maxSpeed);
        }

        if (this.shootTimer <= 0 && keyIsDown(32))
        {
            this.shoot();
            this.shootTimer = 1 / this.mostShotsPerSecond;
        }
        else
            this.shootTimer -= dt;
        
        this.setSpeedY(this.ySpeed * 0.95);
    }

    shoot()
    {
        this.bullets.push(new Projectile("bigbullet.png", this.x, this.y + this.yScale * 15, -this.bulletSpeed, 0, this.xScale * 0.8, this.yScale * 0.8));
    }

    drawBullets()
    {
        for(let i = 0; i < this.bullets.length ; i++)
        {
            this.bullets[i].move();
            this.bullets[i].drawSprite();

            if(this.bullets[i].edgeCollision())
            {
                this.bullets.splice(i, 1);
            }
        }
    }
}