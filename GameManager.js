class GameManager
{
    constructor(font = undefined)
    {
        this.highscore = 0;
        this.score = 0;
        this.level = 0;

        this.font = font;

        this.dataLoaded = false;

        // Load levels from file
        this.levels = loadJSON("levels.json", () => {
            // Callback function run when levels file is loaded
            this.dataLoaded = true;
        });

        // Load infobox
        this.infoBox = new TextBox(
            ["Highscore: " + this.highscore, "Score" + this.score, "Level: " + this.level], this.font, 3, 255, 255, 255, 255, 0, 0, 0, 0
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

        // Enemies
        this.enemies = [];
    }

    /* --------------------- Highscore, score and level functions --------------------- */

    // Update highscore to score if highscore > score and save changes
    updateHighscore()
    {
        if (this.score > this.highscore)
        {
            this.highscore = this.score;
            
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
        this.infoBox.display(x, y);
    }

    // Add amount to score
    addToScore(amount)
    {
        this.score = this.score + amount;
    }

    // Spawn the next wave of enemies and increase level by 1
    spawnNextWave()
    {
        if (!this.isDoneLoading()) return;

        let typesCount = this.levels[this.level].types.length;

        for (let i = 0; i < this.levels[this.level].count; i = i + 1)
        {
            this.enemies.push(
                new Enemy(this.levels[this.level].types[i % typesCount], -30 - i * 250, this.levels[this.level].speed)
            );
        }
        this.level = this.level + 1;
    }

    handleProjectileCollisions(bullets)
    {
        for (let i = 0; i < bullets.length; i++)
        {
            for (let j = 0; j < this.enemies.length; j++)
            {
                if (bullets[i].checkCollision(this.enemies[j], 30))
                {
                    this.enemies.splice(j, 1);
                    this.addToScore(1);
                    break;
                }
            }
        }
    }

    /* --------------------- Enemy functions --------------------- */

    // Move and draw all enemies. Delete enemies if they are out of bounds
    updateEnemies()
    {
        // Update enemies
        for (let i = 0; i < this.enemies.length; i = i + 1)
        {
            this.enemies[i].enemyMove();
            this.enemies[i].drawSprite();

            // Delete enemy if out of bounds
            if (this.enemies[i].deleteEnemyEntity())
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

    // Get the current count of enemies
    getEnemyCount()
    {
        return this.enemies.length;
    }

    /* --------------------- Info/other --------------------- */

    // Check we are done loading level data
    isDoneLoading()
    {
        return this.dataLoaded;
    }
}