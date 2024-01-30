class GameManager
{
    constructor(enemyMultiplier = 1.5, enemiesFirstRound = 10)
    {
        this.highscore = 0;
        this.score = 0;
        this.level = 0;

        this.damage = 1;
        this.attackSpeed = 1;
        this.penetration = 1;
        this.capacity = 1;


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
    display(x = 0, y = 0)
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
        if(this.level<=4)
        {
            // Linear scaling with a bit of randomness to make the game less repetative
            return abs(this.enemyMultiplier * this.level * 5 + random(0,7) + this.enemiesFirstRound)
        }
        if(this.level<=7)
        {
             // same as level 0 to 4 with linear scaling but with bigger scaling
            return abs(this.enemyMultiplier * this.level * 7 + random(0,7)+ this.enemiesFirstRound)
        }

        //can be extended as needed just change the if statement for more levels incluted or make more


    }

    // Use this function to track the increase in bullet damage from power-ups
    damageIncrease()
    {
        this.damage = this.damage + 1;
        if (this.damage > 3)
        {
           this.damage = 3; 
        }
    }

    // Use this function to track the increase in attack speed from power-ups
    attackSpeedIncrease()
    {
        this.attackSpeed = this.attackSpeed + 1;
        if (this.attackSpeed > 3)
        {
           this.attackSpeed = 3; 
        }
    }

    // Use this function to track the increase in how many enemies bullets can penetrate acquired from power-ups
    bulletPenetrationIncrease()
    {
        this.penetration = this.penetration + 1;
        if (this.penetration > 3)
        {
           this.penetration = 3; 
        }
    }

    // Use this function to track the increase in bullet capacity between reloads from power-ups
    ammoCapacityIncrease()
    {
        this.capacity = this.capacity + 1;
        if (this.capacity > 5)
        {
           this.capacity = 5; 
        }
    }
}
