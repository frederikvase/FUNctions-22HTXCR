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
                    arrExplosions.push(new Explosion(this.enemies[j].x, this.enemies[j].y, 5, 1, 0.1, 2, 3));

                    switch(this.enemies[j].enemyType)
                    {
                        case 1:
                            enemyDeathSound[0].setVolume(0.5);
                            enemyDeathSound[0].play();
                            break;
                        case 2:
                            enemyDeathSound[1].setVolume(1);
                            enemyDeathSound[1].play();
                            break;
                        case 3:
                            enemyDeathSound[2].setVolume(1);
                            enemyDeathSound[2].play();
                            break;
                        case 4:
                            enemyDeathSound[3].setVolume(0.3);
                            enemyDeathSound[3].play();
                            break;
                        case 5:
                            enemyDeathSound[4].play();
                            break;
                        case 6:
                            enemyDeathSound[5].setVolume(2);
                            enemyDeathSound[5].play();
                            break;
                        case 7:
                            enemyDeathSound[6].setVolume(0.5);
                            enemyDeathSound[6].play();
                            break;
                    }
                    this.enemies.splice(j, 1);
                    this.addToScore(1);
                    break;
                }
            }
        }

    }

    projectilePlayerCollision(playerCoords)
    {
        for(let i = 0; i< this.enemies.length; i++)
        {
            if(this.enemies[i].correctEnemyPlayerCollision(playerCoords))
            {
                console.log("Player got hit");
                this.enemies.splice(i, 1);
                return true
                
            }
        }
        //View collision collider on player
        //rect(playerCoords[0] + 10, playerCoords[1] + 10, 80, 70);
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