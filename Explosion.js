class Explosion 
{
    // This class takes an x,y coordinate for where the explosion is to happen, 
    // the amount of particles, the particle movement speed, the duration of the explosion
    // and start min- and maxSize of the particles
    constructor (x, y, amountOfParticle, particleSpeed, disappearSpeed, sizeParticleMin, sizeParticleMax) 
    { 
        this.x = x;
        this.y = y;
        this.amountOfParticle = amountOfParticle;
        this.particleSpeed = particleSpeed;
        this.sizeParticleMin = sizeParticleMin;
        this.sizeParticleMax = sizeParticleMax;

        this.disappearSpeed = -disappearSpeed;

        this.particlesArr = [];

        this.makeParticles(amountOfParticle);
    }

    makeParticles(amountToMake) 
    {
        for (let i = 0; i < amountToMake; i = i + 1)
        {
            this.particlesArr.push(new Particle(this.x, this.y, this.sizeParticleMin, this.sizeParticleMax, this.particleSpeed))
        }
    }

    // Run to make the explosion move
    explode() 
    { 
        for (let i = 0; i < this.particlesArr.length; i = i + 1)
        {
            this.particlesArr[i].drawSprite();
            this.particlesArr[i].move();

            if (this.particlesArr[i].disappear(this.disappearSpeed))
            {
                this.particlesArr.splice(i,1);
                i = i - 1;
            }
        }
    }

    // Returns wheter the explosion is done
    explosionIsDone() 
    {
        if (this.particlesArr.length == 0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}

// Private
class Particle extends Entity 
{
    // This class takes an x pos, y pos, size and speed
    constructor (x, y, sizeMin, sizeMax, speed) 
    {
        let angle = random(0,360);
        let tempSpeed = random(speed - 1, speed + 1);
        let xSpeed = cos(angle) * tempSpeed;
        let ySpeed = sin(angle) * tempSpeed;

        let size = random(sizeMin, sizeMax)

        let xInput = x - size;
        let yInput = y - size;

        super("EksplosionGit\\FUNctions-22HTXCR\\assets\\whitestar.png", xInput, yInput, xSpeed, ySpeed, size, size)

        this.size = [size, size];
    }

    // Makes the particle smaller
    disappear(amountToScale) 
    {
        if (this.size[0] > 0 && this.size[1] > 0)
        {
            this.size = [this.size[0] + amountToScale, this.size[1] + amountToScale];

            this.setScale(this.size[0], this.size[1]);
            
            return false;
        } 
        else
        {
            return true;
        }
    }
}