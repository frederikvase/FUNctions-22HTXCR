class GameManager
{
    constructor(enemyMultiplier = 1.5, enemiesFirstRound = 10)
    {
        this.highscore = 0;
        this.score = 0;
        this.level = 0;

        this.enemyMultiplier = enemyMultiplier;
        this.enemiesFirstRound = enemiesFirstRound;
    }

    // Update highscore to score if highscore > score
    updateHighscore()
    {
        if (this.score > this.highscore)
        {
            this.highscore = this.score;
        }
    }

    // Show info on screen
    display()
    {
        // Score

        // Level up!?
    }

    // Add amount to score
    addToScore(amount)
    {
        this.score = this.score + amount;
    }

    // Call this when all enemies are dead
    levelUp()
    {
        this.level = this.level + 1;
    }

    // Get amount of enemies to spawn in this level
    getEnemiesToSpawn()
    {

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