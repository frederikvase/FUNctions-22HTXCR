class GameManager
{
    constructor(font = undefined, enemyMultiplier = 1.5, enemiesFirstRound = 10)
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

        this.font = font;

        this.scoreBox = new TextBox(
            ["Highscore: " + this.highscore, "Score" + this.score], this.font, 3, 255, 255, 255, 255, 0, 0, 0, 150
        );

        // Initialize undefined localStorage data
        if (typeof (Storage) !== "undefined") 
        {
            if (!localStorage.highscore || localStorage.highscore == "undefined")
            {
                localStorage.highscore = JSON.stringify(0);
            }
        }

        this.loadHighscore();
    }

    // Update highscore to score if highscore > score
    updateHighscore()
    {
        if (this.score > this.highscore)
        {
            this.highscore = this.score;

            // Save highsore
            this.saveHighscore();
        }
    }

    // Save current highscore to localstorage
    saveHighscore()
    {
        localStorage.highscore = JSON.stringify(this.highscore);
    }

    // Load current highscore from localstorage
    loadHighscore()
    {
        this.highscore = JSON.parse(localStorage.highscore);
    }

    // Main game update loop (Use this if game is driven by game manager)
    updateGame()
    {
        this.displayScore();
    }

    // Show score on screen
    displayScore(x = 0, y = 0)
    {        
        // Score
        this.scoreBox.setText(["Highscore: " + this.highscore, "Score: " + this.score]);
        this.scoreBox.display(0, 0);
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
    getEnemiesToSpawn(level)
    {
        //Stair scaling (like jakes relationship scaling from adventure time) ask ulf for more info
        return this.enemyMultiplier * Math.floor(level / 4) + this.enemiesFirstRound;
    }
    

    getEnemiesType(level)
    {   
        // must start on level 0 because mirsad want 1 enemy on level 1 
        return (level % 4);
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