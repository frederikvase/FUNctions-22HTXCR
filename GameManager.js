class GameManager
{
    constructor(font = undefined)
    {
        this.highscore = 0;
        this.score = 0;
        this.level = 0;

        this.font = font;

        this.dataLoaded = false;

        // Load levels
        this.levels = loadJSON("levels.json", () => {
            // Levels loaded!
            this.dataLoaded = true;
        });

        // Load infobox
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

        // Enemies
        this.enemies = [];
    }

    /* --------------------- Highscore, score and level functions --------------------- */

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

    spawnNextWave()
    {
        if (!this.isDoneLoading()) return;

        let typesCount = this.levels[this.level].types.length;

        for (let i = 0; i < this.levels[this.level].count; i++)
        {
            this.enemies.push(new Enemy(this.levels[this.level].types[i % typesCount], -30-i*50, this.levels[this.level].speed));
        }
        this.level++;
    }

    /* --------------------- Entity functions --------------------- */

    // Move and draw all enemies. Delete enemies if they are out of bounds
    updateEnemies()
    {
        // Update enemies
        for (var i = 0; i < this.enemies.length; i = i + 1)
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

    isDoneLoading()
    {
        return this.dataLoaded;
    }
}