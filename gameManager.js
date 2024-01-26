class GameManager
{
    constructor()
    {
        this.highscore = 0;
        this.score = 0;
    }

    // Update highscore to score if highscore > score
    updateHighscore()
    {
        if (this.score > this.highscore)
        {
            this.highscore = this.score;
        }
    }

    // Show score and highscore on screen
    displayScore()
    {

    }

    addToScore(amount)
    {
        this.score = this.score + amount
    }


    // Use this function to track the increase in bullet damage from power-ups
    damageIncrease()
    {

    }

    // Use this function to track the increase in attack speed from power-ups
    attackSpeedIncrease()
    {

    }

    // Use this function to track the increase in how many enemies bullets can penetrate acquired from power-ups
    bulletPenetrationIncrease()
    {

    }

    // Use this function to track the increase in bullet capacity between reloads from power-ups
    ammoCapacityIncrease()
    {

    }

}