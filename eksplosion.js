class Eksplosion {
    constructor (x, y, antalPartikler, hastighedPartikler, varighed, sizePartikler) { 
        this.x = x;
        this.y = y;
        this.antalPartikler = antalPartikler;
        this.hastighedPartikler = hastighedPartikler;
        this.varighed = varighed;
        this.sizePartikler = sizePartikler;

        this.eksploder();
    }

    eksploder() { //skal ikke calles

    }

    eksplosionDone() { //returner om eksplosionen er færdig og skal slettes

    }
}

class Partikler extends Entity {

}