class GameManager
{
    constructor(font = undefined, enemyMultiplier = 1.5, enemiesFirstRound = 1)
    {
        HighscoreSound=loadSound(`assets/look_guys_look.mp3`);
        this.highscore = 0;
        this.score = 0;
        this.level = 0;

        this.damage = 1;
        this.attackSpeed = 1;
        this.penetration = 1;
        this.capacity = 1;

        this.font = font;

        this.infoBox = new TextBox(
            ["Highscore: " + this.highscore, "Score" + this.score, "Level: " + this.level], this.font, 3, 255, 255, 255, 255, 0, 0, 0, 150
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

        // Things related to initializing gameobjects

        // Sky
        this.sky = new Sky();

        // Player
        this.player = new Player(width * 0.9, height / 2, 0, 0, 1, 1, 0.1, 0.01);

        // Enemies
        this.enemies = [];
        this.enemyMultiplier = enemyMultiplier;
        this.enemiesFirstRound = enemiesFirstRound;
        this.currentEnemyType = this.getEnemiesType(this.level);
        this.enemiesToSpawn = this.getEnemiesToSpawn(this.level);
    }

    /* --------------------- Highscore, score and level functions --------------------- */

    // Update highscore to score if highscore > score
    updateHighscore()
    {
        if (this.score > this.highscore)
        {
            this.highscore = this.score;
            HighscoreSound.Play();
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

    // Show score and level on screen
    displayInfo(x = 0, y = 0)
    {        
        // Update and display infobox
        this.infoBox.setText(["Highscore: " + this.highscore, "Score: " + this.score, "Level: " + this.level]);
        this.infoBox.display(0, 0);
    }

    // Add amount to score
    addToScore(amount)
    {
        this.score = this.score + amount;
    }

        /* Spawn enemies if there are more enemies to spawn in the current level else go to next level.
    If spawnchance is 1, an enemy is spawned (defaults to 1% chance of enemy spawn by usin the random function)*/
    updateLevel(spawnEnemy = Math.floor(random(1, 100)))
    {
        if (this.enemiesToSpawn > 0)
        {
            if (spawnEnemy == 1)
                {
                    this.enemies.push(new Enemy(this.currentEnemyType));
                    this.enemiesToSpawn = this.enemiesToSpawn - 1;
                }
        }
        // Level progression here...
    }

    // Call this when all enemies are dead
    levelUp()
    {
        this.level = this.level + 1;
        this.currentEnemyType = this.getEnemiesType(level);
        this.enemiesToSpawn = this.getEnemiesToSpawn(level);
    }

    /* --------------------- Entity functions --------------------- */

    // Move and draw all enemies. Delete enemies if they are out of bounds
    updateEnemies()
    {
        // Update enemies
        for (var i = 0; i < this.enemies.length; i = i + 1)
        {
            this.enemies[i].move();
            this.enemies[i].drawSprite();

            // Delete enemy if out of bounds
            if (this.enemies[i].deleteEnemyEntity() > width)
            {
                this.enemies.splice(i, 1);
                i = i - 1;
            }
        }
    }

    // Check collision between enemy and player
    checkEnemyCollision()
    {

    }
    // Check collision between bullet and enemy
    checkBulletCollision()
    {

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

    /* --------------------- Multiplier functions --------------------- */

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