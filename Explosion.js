class Explosion 
{
    // This class takes an x, y coordinate for where the explosion is to happen, 
    // the amount of particles, the particle movement speed, the dissapering speed of the particles,
    // start min- and maxSize of the particles
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

    // Private
    // Makes an array of the particals in the explosion
    makeParticles(amountToMake) 
    {
        for (let i = 0; i < amountToMake; i = i + 1)
        {
            this.particlesArr.push(new Particle(this.x, this.y, this.sizeParticleMin, this.sizeParticleMax, this.particleSpeed))
        }
    }

    // Public
    // Run in draw to make the explosion move
    explode() 
    { 
        for (let i = 0; i < this.particlesArr.length; i = i + 1)
        {
            this.particlesArr[i].drawSprite();  // Draws the explosion particals
            this.particlesArr[i].move();        // Moves the explosion particals

            // If the partical has gotten a size below or equal to zero remove the partical
            if (this.particlesArr[i].disappear(this.disappearSpeed))
            {
                this.particlesArr.splice(i,1);
                i = i - 1;
            }
        }
    }

    // Public
    // Returns whether the explosion is done, so that it can be removed
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
    // This class takes an x pos, y pos, size minium, size maximum and speed of the particle
    constructor (x, y, sizeMin, sizeMax, speed) 
    {
        let angle = random(0,360);
        let tempSpeed = random(speed - 1, speed + 1);
        let xSpeed = cos(angle) * tempSpeed;
        let ySpeed = sin(angle) * tempSpeed;

        let size = random(sizeMin, sizeMax)

        console.log(size);
        let xInput = x;

        super("smallstar.png", x, y, xSpeed, ySpeed, size, size) // The arguments extended from Entity class

        this.size = [size, size];

        this.setOrigo((11 * this.size[0]) / 2, (11 * this.size[1]) / 2);
    }

    // Makes the particle smaller
    disappear(amountToScale) 
    {
        if (this.size[0] > 0 && this.size[1] > 0)
         {
            this.size = [this.size[0] + amountToScale, this.size[1] + amountToScale];

            this.setScale(this.size[0], this.size[1]);
            
            return false; // The particle hasn't disappeared
        } 
        else
        {
            return true; // The particle has disappeared
        }
    }
}