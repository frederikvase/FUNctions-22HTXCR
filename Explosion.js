class Explosion {
    constructor (x, y, antalParticle, hastighedParticle, varighed, sizeParticle) { 
        this.x = x;
        this.y = y;
        this.antalParticle = antalParticle;
        this.hastighedParticle = hastighedParticle;
        this.varighed = varighed;
        this.sizeParticle = sizeParticle;

        this.explode();
    }

    explode() { // Private

    }

    explosionDone() { // Returns wheter the explosion is done

    }
}

class Particle extends Entity {
    // This class takes an x pos, y pos, size and speed
    constructor (x, y, size, speed) {
        let angle = random(0,360)
        let xSpeed = cos(angle) * speed;
        let ySpeed = sin(angle) * speed;

        super("EksplosionGit\\FUNctions-22HTXCR\\assets\\flower.jpg", x, y, xSpeed, ySpeed, size, size)
        this.size = {
            x: size,
            y: size
        }
    }

    // Makes the particle smaller
    disappear(amountToScale) {
        this.size = {
            x: this.size.x + amountToScale,
            y: this.size.y + amountToScale
        };
        this.setScale(this.size.x, this.size.y);
    }
    
}